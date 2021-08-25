import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useTheme } from "styled-components";

import { useReduxSelector } from "../../../hooks/useRedux";
import { totalCurrency } from "../../../utils/totalCurrency";
import { round } from "../../../utils/round";

import { Indicator } from "../../../components/Indicator";

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
      let { totalExpenses, totalGains } = totalCurrency(
        walletState.expenses,
        walletState.gains,
        dateState.monthSelected,
        dateState.yearSelected
      );

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
          <Indicator income={true} value={income} description={"Income"} />
          <Indicator income={false} value={expense} description={"Expense"} />
        </S.GraphicsText>
        <S.GraphicsChart>
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
        </S.GraphicsChart>
      </S.Graphics>
    </S.Container>
  );
}
