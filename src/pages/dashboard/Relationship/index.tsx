import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useTheme } from "styled-components";

import { useReduxSelector } from "../../../hooks/useRedux";
import { filteredDate } from "../../../utils/filteredDate";
import { round } from "../../../utils/round";

import * as S from "./styles";

export function Relationship() {
  const walletState = useReduxSelector((state) => state.wallet);
  const dateState = useReduxSelector((state) => state.selectedDate);

  const [income, setIncome] = useState("");
  const [expense, setExpense] = useState("");
  const [data, setData] = useState([{ value: 50 }, { value: 50 }]);

  const theme = useTheme();
  const COLORS = [theme.colors.income, theme.colors.expense];

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

      totalGains = round(totalGains) || 50;
      totalExpenses = round(totalExpenses) || 50;

      const total = totalGains + totalExpenses;

      setIncome(Math.round((totalGains * 100) / total).toString());
      setExpense(Math.round((totalExpenses * 100) / total).toString());

      setData([
        {
          value: Math.round((totalGains * 100) / total),
        },
        {
          value: Math.round((totalExpenses * 100) / total),
        },
      ]);
    }
    loaderData();
    return () => {};
  }, [
    dateState.monthSelected,
    dateState.yearSelected,
    walletState.gains,
    walletState.expenses,
  ]);

  return (
    <S.Container>
      <S.Graphics>
        <S.GraphicsText>
          <S.GraphicsTitle>Relationship</S.GraphicsTitle>
          <S.IndicatorContainer>
            <S.Square income={true}>
              <S.SquareText>{`${income}%`}</S.SquareText>
            </S.Square>
            <S.Description>Income</S.Description>
          </S.IndicatorContainer>
          <S.IndicatorContainer>
            <S.Square income={false}>
              <S.SquareText>{`${expense}%`}</S.SquareText>
            </S.Square>
            <S.Description>Expense</S.Description>
          </S.IndicatorContainer>
        </S.GraphicsText>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </S.Graphics>
    </S.Container>
  );
}
