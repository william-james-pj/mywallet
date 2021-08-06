import { createSlice } from "@reduxjs/toolkit";

import { WalletState } from "./types";

import { data } from "../../database";

const initialState: WalletState = {
  expenses: [],
  gains: [],
};

const wallet = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    getData(state) {
      state.expenses = data.expenses;
      state.gains = data.gains;
    },
  },
});

export const { getData } = wallet.actions;
export default wallet.reducer;
