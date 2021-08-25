import { BarChart as Chart, Bar, ResponsiveContainer, Cell } from "recharts";

import { Indicator } from "../../../components/Indicator";

import * as S from "./styles";

interface IDataObj {
  name: string;
  amount: number;
  percent: string;
  color: string;
}

interface IBarChartProps {
  title: string;
  data: IDataObj[];
}

export function BarChart({ title, data }: IBarChartProps) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Row>
        <S.DescriptionContainer>
          {data.map((item) => (
            <Indicator
              key={`${item.name}-${item.percent}`}
              income={item.name === "Recurrent" ? true : false}
              value={item.percent}
              description={item.name}
            />
          ))}
        </S.DescriptionContainer>
        <S.ChartContainer>
          <ResponsiveContainer width="100%" height="80%">
            <Chart width={150} height={40} data={data}>
              <Bar dataKey="amount">
                {data.map((indicator) => (
                  <Cell key={indicator.name} fill={indicator.color} />
                ))}
              </Bar>
            </Chart>
          </ResponsiveContainer>
        </S.ChartContainer>
      </S.Row>
    </S.Container>
  );
}
