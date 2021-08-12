import { IWalletItemDB } from "../@types/types";
import { formatMonth } from "./formatMonth";

export const filteredDate = (
  items: IWalletItemDB,
  monthSelected: string,
  yearSelected: string
): IWalletItemDB => {
  return items.filter((item) => {
    const date = new Date(item.date);
    const month = formatMonth(date);
    const year = String(date.getFullYear());

    return month === monthSelected && year === yearSelected;
  });
};
