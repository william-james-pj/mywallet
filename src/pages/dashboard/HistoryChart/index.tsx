import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useTheme } from "styled-components";

import { useReduxSelector } from "../../../hooks/useRedux";
import { totalCurrency } from "../../../utils/totalCurrency";

import { IObjInput } from "../../../@types/types";

import * as S from "./styles";

interface IData {
  month: string;
  income: number;
  expense: number;
}

interface IDatas extends Array<IData> {}

export function HistoryChart() {
  const theme = useTheme();
  const walletState = useReduxSelector((state) => state.wallet);
  const dateState = useReduxSelector((state) => state.selectedDate);

  const [data, setData] = useState<IDatas>([]);

  const sliceMonths = (months: IObjInput[], monthSelected: string) => {
    let arrayMonths = months.map((a) => a.value);

    const index = arrayMonths.findIndex((element) => element === monthSelected);

    if (index - 6 < 0) {
      const missingNumber = 6 - index;

      const missingMonths = arrayMonths.slice(
        months.length - missingNumber,
        months.length
      );

      const monthsSlice = arrayMonths.slice(index - index, index + 1);

      arrayMonths = missingMonths.concat(monthsSlice);
    } else arrayMonths = arrayMonths.slice(index - 6, index + 1);

    return arrayMonths;
  };

  useEffect(() => {
    const months = sliceMonths(dateState.months, dateState.monthSelected);

    let data: IDatas = months.map((item) => {
      const { totalExpenses, totalGains } = totalCurrency(
        walletState.expenses,
        walletState.gains,
        item,
        dateState.yearSelected
      );

      return {
        month: item,
        expense: totalExpenses,
        income: totalGains,
      };
    });

    setData(data);
    return () => {};
  }, [dateState, walletState]);

  return (
    <S.Container>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 20,
            left: 20,
            bottom: 0,
          }}
        >
          <XAxis dataKey="month" axisLine={false} tickLine={false} />
          <YAxis hide={true} axisLine={false} tickLine={false} />
          <Tooltip />
          <Legend
            verticalAlign="top"
            align="right"
            wrapperStyle={{ position: "absolute" }}
          />
          <Line
            type="monotone"
            dataKey="income"
            strokeWidth={2}
            stroke={theme.colors.income}
          />
          <Line
            type="monotone"
            dataKey="expense"
            strokeWidth={2}
            stroke={theme.colors.expense}
          />
        </LineChart>
      </ResponsiveContainer>
    </S.Container>
  );
}
