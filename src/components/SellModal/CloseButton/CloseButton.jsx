import { modalNotActive } from "../../../reducers/modalSlice";
import buttonStyles from "../../commons/Buttons.module.scss";
import { useDispatch } from "react-redux";

export const CloseButton = ({ id }) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(modalNotActive());
  };

  return (
    <button
      id={id}
      className={buttonStyles.SellYourPhoneBanner}
      onClick={() => handleClose()}
    >
      Close
    </button>
  );
};
