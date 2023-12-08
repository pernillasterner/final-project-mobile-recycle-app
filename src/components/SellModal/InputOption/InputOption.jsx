import styles from "./../SellModal.module.scss";
import { useState } from "react";

export const InputOption = ({
  name,
  placeholder,
  onButtonClick,
  errorMessage,
  onChange,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = (e) => {
    e.preventDefault();
    onButtonClick({ name, option: inputValue, e });
    // Clear input value after handling the button click
    setInputValue("");
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    onChange();
  };

  return (
    <>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={inputValue}
        required
        onChange={handleInputChange}
      />
      {errorMessage && <p className={styles.ErrorMessage}>{errorMessage}</p>}
      <button className={styles.FormButton} onClick={handleButtonClick}>
        OK
      </button>
    </>
  );
};
