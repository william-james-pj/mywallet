import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

import { IObjData } from "../../../@types/types";

import { Indicator } from "../../../components/Indicator";

import * as S from "./styles";

interface IRelationshipProps {
  data: IObjData[];
}

export function Relationship({ data }: IRelationshipProps) {
  return (
    <S.Container>
      <S.Graphics>
        <S.GraphicsText>
          <S.GraphicsTitle>Relationship</S.GraphicsTitle>
          {data.map((item) => (
            <Indicator
              key={`${item.name}-${item.percent}`}
              income={item.name === "Income" ? true : false}
              value={item.percent}
              description={item.name}
            />
          ))}
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
                dataKey="amount"
              >
                {data.map((indicator) => (
                  <Cell key={`cell-${indicator.name}`} fill={indicator.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </S.GraphicsChart>
      </S.Graphics>
    </S.Container>
  );
}
