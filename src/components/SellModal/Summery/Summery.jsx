import styles from "../SellModal.module.scss";
import { useState } from "react";
import supabase from "../../../config/supabaseClient";

export const Summery = ({ details }) => {
  const [submissionStatus, setSubmissionStatus] = useState("pending");
  const desc = details.phoneDescription;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.from("phones").insert([
        {
          modelValue: details.modelValue,
          brandValue: details.brandValue,
          imageUrl: "https://cdn.webhallen.com/images/product/345101?trim",
          priceValue: details.priceValue,
          phoneDescription: [
            {
              comment: desc.comment,
              storage: desc.storage,
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
          <p>Comment: {desc.comment}</p>
          <p>Functional Conditions: {desc.functionCondition ? "Yes" : "No"}</p>
          <p>Glass Condition: {desc.glassCondition ? "Yes" : "No"}</p>
          <p>Phone Condition: {desc.phoneCondition ? "Yes" : "No"}</p>
          <p>Phone Damage: {desc.phoneDamage ? "Yes" : "No"}</p>
          <p>Screen Condition: {desc.screenCondition ? "Yes" : "No"}</p>
          <p>Storage: {desc.storage}</p>

          <button
            className={styles.FormButton}
            onClick={(e) => handleSubmit(e)}
          >
            Send
          </button>
        </>
      ) : submissionStatus === "success" ? (
        <h1>THANK YOU FOR SELLING your phone at techcycle</h1>
      ) : (
        <>
          <h1>Error submissioning the product. Please try again!</h1>
          <button>Go back the sell your phone</button>
        </>
      )}
    </div>
  );
};
