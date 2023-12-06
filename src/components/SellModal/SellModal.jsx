import styles from "./SellModal.module.scss";
import { useState } from "react";
import supabase from "../../config/supabaseClient";
import questions from "../../data/questions.json";
import { InputOption } from "./InputOption/InputOption";
import { Summery } from "./Summery/Summery";
import buttonStyles from "../commons/Buttons.module.scss";
import { modalNotActive } from "../../reducers/modalSlice";
import { useDispatch } from "react-redux";

export const SellModal = () => {
  const dispatch = useDispatch();
  const [fetchError, setFetchError] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [phoneModels, setPhoneModels] = useState(null);
  const [steps, setSteps] = useState(0);
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

  const validatePriceValue = (option) => {
    if (/^[0-9]+$/.test(option) && option.length < 6) {
      return true;
    } else {
      return false;
    }
  };

  const validateComment = (option) => {
    const invalidCharsRegex = /<[^>]*>|[^a-zA-Z0-9åäöÅÄÖ\s.,!?'"-]/g;

    if (!invalidCharsRegex.test(option) && option.length <= 250) {
      return true;
    } else {
      return false;
    }
  };

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
      const updatedDetails = { ...phoneDetails };

      //   Validation for input fields
      if (name === "priceValue" && option !== "") {
        if (!validatePriceValue(option)) {
          setErrorMessage(
            "Please enter a valid price. Price must be 5 digits or fewer."
          );
          return;
        }
      }

      if (name === "comment" && option !== "") {
        if (!validateComment(option)) {
          setErrorMessage(
            "Comment must be 250 characters or fewer. Please avoid special symbols."
          );
          return;
        }
      }

      const updatedOption =
        option === "Yes" ? true : option === "No" ? false : option;

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
      }

      setPhoneDetails(updatedDetails);
    };
    setErrorMessage("");
    handleAsyncLogic();
  };

  return (
    <div className={styles.SellModalContainer}>
      <button
        className={buttonStyles.SellYourPhoneBtn}
        id={styles.CloseBtnSellModal}
        onClick={() => dispatch(modalNotActive())}
      >
        Close
      </button>
      <div className={styles.FormStepContainer}>
        {questions[steps] ? (
          <>
            <h2>Sell you phone by following these steps</h2>
            <form>
              <h4>{questions[steps].question}</h4>
              {questions[steps].name === "modelValue" ? (
                <div className={styles.SelectContainer}>
                  <select
                    name="modelValue"
                    value={selectedValue}
                    onChange={(e) => {
                      setSelectedValue(e.target.value);
                    }}
                    required
                  >
                    <option value="" disabled hidden>
                      {questions[steps].question}
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
                    placeholder={questions[steps].question}
                    onButtonClick={(data) =>
                      handleButtonClick({
                        ...data,
                        phoneDescription: questions[steps].phoneDescription,
                      })
                    }
                  />
                  {errorMessage && (
                    <p className={styles.ErrorMessage}>{errorMessage}</p>
                  )}
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
          <>
            <Summery details={phoneDetails} />
          </>
        )}
      </div>
    </div>
  );
};
