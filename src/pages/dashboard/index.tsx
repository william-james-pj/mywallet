import { useMemo } from "react";
import { useTheme } from "styled-components";
import { useReduxSelector } from "../../hooks/useRedux";

import { Header } from "../../components/Header";
import { BarChart } from "./BarChart";
import { HeaderGraphics } from "./HeaderGraphics";
import { HistoryChart } from "./HistoryChart";
import { Message } from "./Message";
import { Relationship } from "./Relationship";

import { filteredDate } from "../../utils/filteredDate";
import { round } from "../../utils/round";

import * as S from "./styles";

export function Dashboard() {
  const walletState = useReduxSelector((state) => state.wallet);
  const dateState = useReduxSelector((state) => state.selectedDate);

  const theme = useTheme();

  const barChartGains = useMemo(() => {
    let totalRecurrent = 0;
    let totalOccasional = 0;

    const filteredGains = filteredDate(
      walletState.gains,
      dateState.monthSelected,
      dateState.yearSelected
    );

    filteredGains.forEach((gain) => {
      if (gain.frequency === "Recurrent") {
        totalRecurrent += Number(gain.amount);
      }

      if (gain.frequency === "Occasional") {
        totalOccasional += Number(gain.amount);
      }
    });

    totalRecurrent = round(totalRecurrent);
    totalOccasional = round(totalOccasional);

    const total = totalRecurrent + totalOccasional;

    const recurrentPercent = Math.round((totalRecurrent * 100) / total) || 0;
    const occasionalPercent = Math.round((totalOccasional * 100) / total) || 0;

    return [
      {
        name: "Recurrent",
        amount: totalRecurrent,
        percent: recurrentPercent ? recurrentPercent.toString() : "0",
        color: theme.colors.income,
      },
      {
        name: "Occasional",
        amount: totalOccasional,
        percent: occasionalPercent ? occasionalPercent.toString() : "0",
        color: theme.colors.expense,
      },
    ];
  }, [
    dateState.monthSelected,
    dateState.yearSelected,
    walletState.gains,
    theme,
  ]);

  const barChartExpenseves = useMemo(() => {
    let totalRecurrent = 0;
    let totalOccasional = 0;

    const filteredExpenses = filteredDate(
      walletState.expenses,
      dateState.monthSelected,
      dateState.yearSelected
    );

    filteredExpenses.forEach((gain) => {
      if (gain.frequency === "Recurrent") {
        totalRecurrent += Number(gain.amount);
      }

      if (gain.frequency === "Occasional") {
        totalOccasional += Number(gain.amount);
      }
    });

    totalRecurrent = round(totalRecurrent);
    totalOccasional = round(totalOccasional);

    const total = totalRecurrent + totalOccasional;

    const recurrentPercent = Math.round((totalRecurrent * 100) / total) || 0;
    const occasionalPercent = Math.round((totalOccasional * 100) / total) || 0;

    return [
      {
        name: "Recurrent",
        amount: totalRecurrent,
        percent: recurrentPercent ? recurrentPercent.toString() : "0",
        color: theme.colors.income,
      },
      {
        name: "Occasional",
        amount: totalOccasional,
        percent: occasionalPercent ? occasionalPercent.toString() : "0",
        color: theme.colors.expense,
      },
    ];
  }, [
    dateState.monthSelected,
    dateState.yearSelected,
    walletState.expenses,
    theme,
  ]);

  return (
    <S.Container>
      <Header title={"Dashboard"} />
      <S.GraphicsContainer>
        <S.GraphicsHeader>
          <HeaderGraphics />
        </S.GraphicsHeader>
        <S.RowContainer>
          <S.MessageDiv>
            <Message />
          </S.MessageDiv>
          <S.RelationshipContainer>
            <Relationship />
          </S.RelationshipContainer>
        </S.RowContainer>
        <S.LineGraphic>
          <HistoryChart />
        </S.LineGraphic>
        <S.RowContainer>
          <S.BarGraphic>
            <BarChart title={"Income"} data={barChartGains} />
          </S.BarGraphic>
          <S.BarGraphic>
            <BarChart title={"Expense"} data={barChartExpenseves} />
          </S.BarGraphic>
        </S.RowContainer>
      </S.GraphicsContainer>
    </S.Container>
  );
}
