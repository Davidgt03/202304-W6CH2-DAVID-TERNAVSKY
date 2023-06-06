import { useSelector, useDispatch } from "react-redux";
import * as action from "../redux/reducer";
import { AppDispatch, RootState } from "../../../core/store/store";

export function usePhone() {
  const { textKey, isCalling } = useSelector((state: RootState) => state.phone);
  const dispatch: AppDispatch = useDispatch();
  const phoneNumbers = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "delete",
  ];

  function handleAddNumber(value: string) {
    if (textKey.length < 9) {
      dispatch(action.add(value));
    }
  }
  function handleDelete() {
    dispatch(action.erase());
  }

  return {
    handleAddNumber,
    phoneNumbers,
    isCalling: isCalling,
    handleDelete,
    display: textKey,
  };
}
