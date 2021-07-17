import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Sector,
  SectorProps,
} from "recharts";

import * as S from "./styles";

const COLORS = ["#0088FE", "rgba(250, 250, 250, 1)"];

interface Props {
  percentage: number;
}

export function PieChartHeader({ percentage }: Props) {
  const data = [{ percentage }, { percentage: 100 - percentage }];

  const renderActiveShape = (props: SectorProps) => {
    const { cx, cy, fill, innerRadius, outerRadius, startAngle, endAngle } =
      props;

    return (
      <g>
        <S.Text x={cx} y={cy} dy={8} textAnchor="middle">
          {`${percentage}%`}
        </S.Text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
          cornerRadius={40}
        />
      </g>
    );
  };

  return (
    <S.Container>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="percentage"
            activeIndex={0}
            activeShape={renderActiveShape}
            innerRadius={35}
            paddingAngle={5}
            outerRadius={45}
            startAngle={100}
            endAngle={-260}
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
    </S.Container>
  );
}
