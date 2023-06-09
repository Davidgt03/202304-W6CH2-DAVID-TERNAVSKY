import { createSlice } from "@reduxjs/toolkit";

export type PhoneState = {
  textKey: string;
  isCalling: boolean;
  isHangUp: boolean;
};

const initialState: PhoneState = {
  textKey: "",
  isCalling: false,
  isHangUp: true,
};

const slicePhone = createSlice({
  name: "phone",
  initialState,
  reducers: {
    add: (state, { payload }) => ({
      ...state,
      textKey: state.textKey + payload,
    }),
    erase: (state) => ({
      ...state,
      phoneNumber: state.textKey.substring(0, state.textKey.length - 1),
    }),
    hang: (state) => ({
      ...state,
      iscalling: !state.isCalling,
    }),
    call: (state) => ({
      ...state,
      iscalling: !state.isCalling,
    }),
  },
});

export const { add, erase, hang, call } = slicePhone.actions;
export default slicePhone.reducer;
