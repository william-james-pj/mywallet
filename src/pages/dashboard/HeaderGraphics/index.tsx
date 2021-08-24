import { useEffect, useState } from "react";

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

  const [balance, setBalance] = useState("");
  const [income, setIncome] = useState("");
  const [expense, setExpense] = useState("");

  useEffect(() => {
    function loaderData() {
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

      setIncome(totalGains.toString());
      setExpense(totalExpenses.toString());
    }
    loaderData();
    return () => {};
  }, [
    dateState.monthSelected,
    dateState.yearSelected,
    walletState.gains,
    walletState.expenses,
  ]);

  useEffect(() => {
    function loaderBalance() {
      let totalGains = 0;
      let totalExpense = 0;

      walletState.gains.forEach((item) => {
        totalGains += parseFloat(item.amount);
      });

      walletState.expenses.forEach((item) => {
        totalExpense += parseFloat(item.amount);
      });

      let balance = round(totalGains - totalExpense);
      setBalance(balance.toString());
    }
    loaderBalance();
    return () => {};
  }, [walletState.gains, walletState.expenses]);

  return (
    <S.Container>
      <S.ItemHeader type={0}>
        <TextAmount header={"Balance"} content={balance} typeBox={1}/>
        <TextIcon header={"Until today"} icon={faWallet} typeBox={4} />
      </S.ItemHeader>
      <S.ItemHeader type={1}>
        <TextAmount header={"Total income"} content={income} typeBox={2}/>
        <TextIcon
          header={`In ${dateState.monthSelected}`}
          icon={faLongArrowAltRight}
          typeBox={2}
        />
      </S.ItemHeader>
      <S.ItemHeader type={2}>
        <TextAmount header={"Total expense"} content={expense} typeBox={2}/>
        <TextIcon
          header={`In ${dateState.monthSelected}`}
          icon={faLongArrowAltRight}
          typeBox={3}
        />
      </S.ItemHeader>
    </S.Container>
  );
}
