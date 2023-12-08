import styles from "./SellModal.module.scss";
import { useState } from "react";
import supabase from "../../config/supabaseClient";
import questions from "../../data/questions.json";
import { InputOption } from "./InputOption/InputOption";
import { Summery } from "./Summery/Summery";
import buttonStyles from "../commons/Buttons.module.scss";
import loaderStyles from "../commons/Loader.module.scss";
import { modalNotActive } from "../../reducers/modalSlice";
import { useDispatch } from "react-redux";
import { validatePriceValue, validateComment } from "../../utils/validation";

export const SellModal = () => {
  const dispatch = useDispatch();
  const [fetchError, setFetchError] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [phoneModels, setPhoneModels] = useState(null);
  const [steps, setSteps] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [phoneDetails, setPhoneDetails] = useState({
    modelValue: "",
    brandValue: "",
    imageUrl: "",
    priceValue: "",
    visualCondition: "",
    comment: "",
    storage: "",
    phoneDescription: {
      glassCondition: false,
      phoneDamage: false,
      screenCondition: false,
      functionCondition: false,
      phoneCondition: false,
    },
    peer2peer: true,
  });

  const handleButtonClick = ({ name, option, e, phoneDescription }) => {
    e.preventDefault();

    // Check to see if user has answered the question
    if (name === "priceValue" && !option) {
      setErrorMessage("You need to enter a price");
      return;
    } else if (name === "modelValue" && !option) {
      setErrorMessage("You need to select a phone model");
      return;
    } else if (name === "comment" && !option) {
      setErrorMessage("Please leave a short comment.");
      return;
    }

    const handleAsyncLogic = async () => {
      setIsLoading(true);

      const updatedDetails = { ...phoneDetails };

      // Validation for input fields
      if (name === "priceValue" && option !== "") {
        if (!validatePriceValue(option)) {
          setErrorMessage(
            "Please enter a valid price. Price must be 5 digits or fewer."
          );
          setIsLoading(false);
          return;
        }
      }

      if (name === "comment" && option !== "") {
        if (!validateComment(option)) {
          setErrorMessage(
            "Comment must be 250 characters or fewer. Please avoid special symbols."
          );
          setIsLoading(false);
          return;
        }
      }
      const updatedOption = getUpdatedOption(name, option);

      try {
        if (name === "brandValue") {
          // Fetch data using the dynamic 'option' value
          const { data } = await supabase
            .from("phonemodels")
            .select("modelValue")
            .eq("brandValue", updatedOption);
          setPhoneModels(data);
        }

        if (!phoneDescription) {
          updatedDetails[name] = updatedOption;
          setSteps(steps + 1);
        } else {
          updatedDetails["phoneDescription"][name] = updatedOption;
          setSteps(steps + 1);
        }
      } catch (error) {
        setFetchError("Could not fetch product models");
      } finally {
        // Resetting loader
        setIsLoading(false);
      }

      setPhoneDetails(updatedDetails);
    };
    setErrorMessage("");
    handleAsyncLogic();
  };

  const getUpdatedOption = (name, option) => {
    return option === "Yes" ? true : option === "No" ? false : option;
  };

  const handleInputChange = () => {
    setErrorMessage("");
  };

  return (
    <div className={styles.SellModalContainer}>
      <button
        id={buttonStyles.CloseBannerSellModal}
        className={buttonStyles.SellYourPhoneBanner}
        onClick={() => dispatch(modalNotActive())}
      >
        Close
      </button>
      <button
        className={buttonStyles.SellYourPhoneBtn}
        id={buttonStyles.CloseBtnSellModal}
        onClick={() => dispatch(modalNotActive())}
      >
        Close
      </button>

      <div className={styles.FormStepContainer}>
        {isLoading && <div className={loaderStyles.Loader}>Loading...</div>}
        {/* Loop through all the steps in the array  */}
        {!isLoading && questions[steps] ? (
          <>
            <h2>Sell your phone by following these steps</h2>
            <form>
              <h4>{questions[steps].question}</h4>
              {questions[steps].name === "modelValue" ? (
                <div className={styles.SelectContainer}>
                  <select
                    name="modelValue"
                    value={selectedValue}
                    onChange={(e) => {
                      setSelectedValue(e.target.value);
                      handleInputChange();
                    }}
                    required
                  >
                    <option value="" disabled hidden>
                      {questions[steps].placeholder}
                    </option>
                    {phoneModels.map((modelValue, index) => (
                      <option key={index} value={modelValue.modelValue}>
                        {modelValue.modelValue}
                      </option>
                    ))}
                  </select>
                  {errorMessage && (
                    <p className={styles.ErrorMessage}>{errorMessage}</p>
                  )}
                  <button
                    className={styles.FormButton}
                    onClick={(e) =>
                      handleButtonClick({
                        name: questions[steps].name,
                        option: selectedValue,
                        e,
                        phoneDescription: questions[steps].phoneDescription,
                      })
                    }
                  >
                    Continue
                  </button>
                </div>
              ) : "input" in questions[steps] ? (
                <>
                  <InputOption
                    name={questions[steps].name}
                    placeholder={questions[steps].placeholder}
                    onButtonClick={(data) =>
                      handleButtonClick({
                        ...data,
                        phoneDescription: questions[steps].phoneDescription,
                      })
                    }
                    errorMessage={errorMessage}
                    // Reset error message when user click in input field
                    onChange={handleInputChange}
                  />
                </>
              ) : (
                "options" in questions[steps] &&
                questions[steps].options.map((option, index) => (
                  <button
                    key={index}
                    className={styles.FormButton}
                    onClick={(e) =>
                      handleButtonClick({
                        name: questions[steps].name,
                        option: option,
                        e,
                        phoneDescription: questions[steps].phoneDescription,
                      })
                    }
                  >
                    {option}
                  </button>
                ))
              )}
            </form>
          </>
        ) : (
          <>{!isLoading && <Summery details={phoneDetails} />}</>
        )}
      </div>
    </div>
  );
};
