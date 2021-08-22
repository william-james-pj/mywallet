import { IWalletItemDB } from "../@types/types";
import { filteredDate } from "./filteredDate";
import { round } from "./round";

export const totalCurrency = (
  expenses: IWalletItemDB,
  gains: IWalletItemDB,
  monthSelected: string,
  yearSelected: string
) => {
  const filteredGains = filteredDate(gains, monthSelected, yearSelected);
  const filteredExpenses = filteredDate(expenses, monthSelected, yearSelected);

  let totalGains = 0;
  let totalExpenses = 0;

  filteredGains.forEach((item) => {
    totalGains += parseFloat(item.amount);
  });

  filteredExpenses.forEach((item) => {
    totalExpenses += parseFloat(item.amount);
  });

  totalGains = round(totalGains);
  totalExpenses = round(totalExpenses);

  return { totalGains, totalExpenses };
};
