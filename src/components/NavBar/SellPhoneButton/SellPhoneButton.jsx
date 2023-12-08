import buttonStyles from "../../commons/Buttons.module.scss";
import { useDispatch } from "react-redux";
import { modalActive } from "../../../reducers/modalSlice";

export const SellPhoneButton = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button
        className={buttonStyles.SellYourPhoneBanner}
        onClick={() => dispatch(modalActive())}
      >
        Sell your phone
      </button>

      <button
        className={buttonStyles.SellYourPhoneBtn}
        onClick={() => dispatch(modalActive())}
      >
        Sell your phone
      </button>
    </>
  );
};
