import styles from "./Summery.module.scss";
import { useState } from "react";
import supabase from "../../../config/supabaseClient";
import { useSelector, useDispatch } from "react-redux";
import { modalNotActive } from "../../../reducers/modalSlice";

export const Summery = ({ details }) => {
  const dispatch = useDispatch();
  const [submissionStatus, setSubmissionStatus] = useState("pending");
  const isModalActive = useSelector((state) => state.modal.isActive);
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
  const handleCloseModal = () => {
    if (isModalActive) {
      dispatch(modalNotActive());
    }
  };
  return (
    <div className={styles.SummeryContainer}>
      {submissionStatus === "pending" ? (
        <>
          <h2>Summery</h2>
          <div className={styles.HeaderContainer}>
            <h1 className={styles.ModelValue}>{details.modelValue}</h1>
            <div className={styles.ModelInfo}>
              <div className={styles.Info}>
                <p>Brand: {details.brandValue}</p>
                <p>Storage: {details.storage}</p>
                <p>Visual Condition: {details.visualCondition}</p>
              </div>

              <p className={styles.PriceValue}>
                <strong>{details.priceValue} kr</strong>
              </p>
            </div>
          </div>

          <div className={styles.SummeryTableContainer}>
            <table>
              <thead>
                <tr>
                  <th>Questions</th>
                  <th>Answers</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Does the phone function normally?</td>
                  <td>{desc.functionCondition ? "Yes" : "No"}</td>
                </tr>
                <tr>
                  <td>Is the screen intact and undamaged?</td>
                  <td>{desc.screenCondition ? "Yes" : "No"}</td>
                </tr>
                <tr>
                  <td>
                    Are any of the mobile's glass parts broken (back glass or
                    camera lens)?
                  </td>
                  <td>{desc.glassCondition ? "Yes" : "No"}</td>
                </tr>
                <tr>
                  <td>
                    Is your phone bent, water damaged, or is the fingerprint
                    reader broken?
                  </td>
                  <td>{desc.phoneDamage ? "Yes" : "No"}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <button
            className={styles.FormButton}
            onClick={(e) => handleSubmit(e)}
          >
            SEND
          </button>
        </>
      ) : submissionStatus === "success" ? (
        <div className={styles.ThankYouContainer}>
          <h1>Thank you for choosing TechCycle!</h1>
          <button className={styles.FormButton} onClick={handleCloseModal}>
            CLOSE
          </button>
        </div>
      ) : (
        <>
          <h1>Error submissioning the product. Please try again!</h1>
          <button>Go back the sell your phone</button>
        </>
      )}
    </div>
  );
};
