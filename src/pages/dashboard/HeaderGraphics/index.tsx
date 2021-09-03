import { useMemo } from "react";

import { TextAmount } from "./TextAmount";
import { TextIcon } from "./TextIcon";
import { useReduxSelector } from "../../../hooks/useRedux";
import { filteredDate } from "../../../utils/filteredDate";
import { round } from "../../../utils/round";

import {
  faWallet,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";

import * as S from "./styles";

export function HeaderGraphics() {
  const walletState = useReduxSelector((state) => state.wallet);
  const dateState = useReduxSelector((state) => state.selectedDate);

  const balance = useMemo(() => {
    let totalGains = 0;
    let totalExpense = 0;

    const filteredGains = filteredDate(
      walletState.gains,
      dateState.monthSelected,
      dateState.yearSelected
    );

    const filteredExpenses = filteredDate(
      walletState.expenses,
      dateState.monthSelected,
      dateState.yearSelected
    );

    filteredGains.forEach((item) => {
      totalGains += parseFloat(item.amount);
    });

    filteredExpenses.forEach((item) => {
      totalExpense += parseFloat(item.amount);
    });

    let balance = round(totalGains - totalExpense);
    return balance.toString();
  }, [
    walletState.expenses,
    walletState.gains,
    dateState.monthSelected,
    dateState.yearSelected,
  ]);

  const income = useMemo(() => {
    const filteredGains = filteredDate(
      walletState.gains,
      dateState.monthSelected,
      dateState.yearSelected
    );

    let totalGains = 0;

    filteredGains.forEach((item) => {
      totalGains += parseFloat(item.amount);
    });

    totalGains = round(totalGains);

    return totalGains.toString();
  }, [dateState.monthSelected, dateState.yearSelected, walletState.gains]);

  const expense = useMemo(() => {
    const filteredExpenses = filteredDate(
      walletState.expenses,
      dateState.monthSelected,
      dateState.yearSelected
    );

    let totalExpenses = 0;

    filteredExpenses.forEach((item) => {
      totalExpenses += parseFloat(item.amount);
    });

    totalExpenses = round(totalExpenses);

    return totalExpenses.toString();
  }, [dateState.monthSelected, dateState.yearSelected, walletState.expenses]);

  return (
    <S.Container>
      <S.ItemHeader type={0}>
        <TextAmount header={"Balance"} content={balance} typeBox={1} />
        <TextIcon header={"Until today"} icon={faWallet} typeBox={4} />
      </S.ItemHeader>
      <S.ItemHeader type={1}>
        <TextAmount header={"Total income"} content={income} typeBox={2} />
        <TextIcon
          header={`In ${dateState.monthSelected}`}
          icon={faLongArrowAltRight}
          typeBox={2}
        />
      </S.ItemHeader>
      <S.ItemHeader type={2}>
        <TextAmount header={"Total expense"} content={expense} typeBox={2} />
        <TextIcon
          header={`In ${dateState.monthSelected}`}
          icon={faLongArrowAltRight}
          typeBox={3}
        />
      </S.ItemHeader>
    </S.Container>
  );
}
