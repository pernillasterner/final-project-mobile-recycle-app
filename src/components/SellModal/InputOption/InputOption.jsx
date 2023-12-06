import styles from "./../SellModal.module.scss";
import { useState } from "react";

export const InputOption = ({ name, placeholder, onButtonClick }) => {
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = (e) => {
    e.preventDefault();
    onButtonClick({ name, option: inputValue, e });
    // Clear input value after handling the button click
    setInputValue("");
  };
  return (
    <>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={inputValue}
        required
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className={styles.FormButton} onClick={handleButtonClick}>
        OK
      </button>
    </>
  );
};
