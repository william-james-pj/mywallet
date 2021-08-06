import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWalletItemDB } from "../../@types/types";
import { formatMonth } from "../../utils/formatMonth";
import { listOfMonths } from "../../utils/months";

import { SelectedDateState } from "./types";

const initialState: SelectedDateState = {
  years: [{ value: new Date().getFullYear().toString() }],
  months: [{ value: formatMonth(new Date()) }],
  yearSelected: new Date().getFullYear().toString(),
  monthSelected: formatMonth(new Date()),
};

const selectedDate = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setYears(state, action: PayloadAction<IWalletItemDB>) {
      let newArray = [...state.years];

      action.payload.forEach((item) => {
        const date = new Date(item.date);
        const year = date.getFullYear();

        if (!newArray.find((element) => element.value === year.toString()))
          newArray.push({ value: year.toString() });
      });

      state.years = newArray;
    },
    setMonths(state) {
      state.months = listOfMonths.map((month) => {
        return { value: month };
      });
    },

    setYearSelected(state, action: PayloadAction<string>) {
      state.yearSelected = action.payload;
    },
    setMonthSelected(state, action: PayloadAction<string>) {
      state.monthSelected = action.payload;
    },
  },
});

export const { setYears, setMonths, setYearSelected, setMonthSelected } =
  selectedDate.actions;
export default selectedDate.reducer;
