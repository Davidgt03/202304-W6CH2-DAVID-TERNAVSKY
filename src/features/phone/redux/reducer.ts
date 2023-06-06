import { actionTypes } from "./actions.types";
import { PhoneStructure } from "../models/phone";
import { keyPhoneAction } from "./actions.creator";
import { createReducer } from "@reduxjs/toolkit";
import * as ac from "./actions.creator";

export type PhoneState = {
  phone: PhoneStructure[];
};

const initialState: PhoneState = {
  phone: [],
};

const slicePhone = createSlice({
  name: "phone",
  initialState,
  reducers: {
    load: (state, { payload }) => ({
      ...state,
      phone: payload,
    }),
  },
});
