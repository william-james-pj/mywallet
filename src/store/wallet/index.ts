import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { WalletState } from "./types";

import { data } from "../../database";

import { IWalletItem } from "../../@types/types";

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
    addGains(state, action: PayloadAction<IWalletItem>) {
      state.gains.push(action.payload);
    },
    addExpenses(state, action: PayloadAction<IWalletItem>) {
      state.expenses.push(action.payload);
    },
  },
});

export const { getData, addGains, addExpenses } = wallet.actions;
export default wallet.reducer;
