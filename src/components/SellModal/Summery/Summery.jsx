import styles from "../SellModal.module.scss";
import { useState } from "react";
import supabase from "../../../config/supabaseClient";

export const Summery = ({ details, onClose }) => {
  const [submissionStatus, setSubmissionStatus] = useState("pending");
  const desc = details.phoneDescription;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.from("phones").insert([
        {
          modelValue: details.modelValue,
          brandValue: details.brandValue,
          imageUrl:
            "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1678371941/Croma%20Assets/Communication/Mobiles/Images/270413_bjxs29.png?tr=w-640",
          priceValue: details.priceValue,
          storage: details.storage,
          comment: details.comment,
          visualCondition: details.visualCondition,
          phoneDescription: [
            {
              glassCondition: desc.glassCondition,
              phoneDamage: desc.phoneDamage,
              screenCondition: desc.screenCondition,
              functionCondition: desc.functionCondition,
              phoneCondition: desc.phoneCondition,
            },
          ],
        },
      ]);

      if (error) {
        console.error("Error inserting data:", error.message);
        setSubmissionStatus("error");
      } else {
        console.log("Data inserted successfully:", data);
        setSubmissionStatus("success");
      }
    } catch (error) {
      console.error("Error inserting data:", error.message);
      setSubmissionStatus("error");
    }
  };

  return (
    <div>
      {submissionStatus === "pending" ? (
        <>
          <p>Model:{details.modelValue}</p>
          <p>Brand:{details.brandValue}</p>
          <p>Price: {details.priceValue} kr</p>
          <p>Comment: {details.comment}</p>
          <p>Functional Conditions: {desc.functionCondition ? "Yes" : "No"}</p>
          <p>Glass Condition: {desc.glassCondition ? "Yes" : "No"}</p>
          <p>Phone Condition: {desc.phoneCondition ? "Yes" : "No"}</p>
          <p>Phone Damage: {desc.phoneDamage ? "Yes" : "No"}</p>
          <p>Screen Condition: {desc.screenCondition ? "Yes" : "No"}</p>
          <p>Storage: {details.storage}</p>
          <p>Visual Condition: {details.visualCondition}</p>

          <button
            className={styles.FormButton}
            onClick={(e) => handleSubmit(e)}
          >
            Send
          </button>
        </>
      ) : submissionStatus === "success" ? (
        <>
          <h1>THANK YOU FOR SELLING your phone at techcycle</h1>
          <button onClick={onClose}>Close</button>
        </>
      ) : (
        <>
          <h1>Error submissioning the product. Please try again!</h1>
          <button>Go back the sell your phone</button>
        </>
      )}
    </div>
  );
};