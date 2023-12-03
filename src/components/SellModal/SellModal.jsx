import styles from "./SellModal.module.scss";
import { useState } from "react";
import supabase from "../../config/supabaseClient";
import questions from "../../data/questions.json";
import { InputOption } from "./InputOption/InputOption";
import { Summery } from "./Summery/Summery";

export const SellModal = ({ onClose }) => {
  const [fetchError, setFetchError] = useState(null);
  const [selectedValue, setSelectedValue] = useState("");
  const [inputValue, setInputValue] = useState("");
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
  console.log(phoneDetails);
  const validatePriceValue = (option) => {
    if (/^[0-9]+$/.test(option) && option.length <= 6) {
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

    const handleAsyncLogic = async () => {
      const updatedDetails = { ...phoneDetails };

      //   Validation for input fields
      if (name === "priceValue" && option !== "") {
        if (!validatePriceValue(option)) {
          console.log("The validation failed");
          return;
        }
      }

      if (name === "comment" && option !== "") {
        if (!validateComment(option)) {
          console.log("The validation failed");
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
          setInputValue("");
        } else {
          updatedDetails["phoneDescription"][name] = updatedOption;
          setSteps(steps + 1);
          setInputValue("");
        }
      } catch (error) {
        setFetchError("Could not fetch product models");
      }

      setPhoneDetails(updatedDetails);
    };

    handleAsyncLogic();
  };

  return (
    <div className={styles.SellModalContainer}>
      <div className={styles.FormStepContainer}>
        <h2>Sell you phone by following these steps</h2>
        {questions[steps] ? (
          <form>
            <h4>{questions[steps].question}</h4>
            {questions[steps].name === "modelValue" ? (
              <>
                <select
                  name="modelValue"
                  onChange={(e) => {
                    setSelectedValue(e.target.value);
                  }}
                >
                  {phoneModels.map((modelValue, index) => (
                    <option key={index} value={modelValue.modelValue}>
                      {modelValue.modelValue}
                    </option>
                  ))}
                </select>
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
                  OK
                </button>
              </>
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
        ) : (
          <Summery details={phoneDetails} onClose={onClose} />
        )}
      </div>
    </div>
  );
};
