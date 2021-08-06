import { TextGraphicsHeader } from "./TextGraphicsHeader";
import { PieChartHeader } from "./PieChartHeader";

import * as S from "./styles";

export function HeaderGraphics() {
  return (
    <S.Container>
      <S.ItemHeader>
        <TextGraphicsHeader
          header={"Saldo"}
          content={"4000"}
          footer={"Em 02/jun"}
        />
        <PieChartHeader percentage={60} />
      </S.ItemHeader>
      <S.ItemHeader>
        <TextGraphicsHeader
          header={"Total entrada"}
          content={"4000"}
          footer={"Em 02/jun"}
        />
        <PieChartHeader percentage={40} />
      </S.ItemHeader>
      <S.ItemHeader>
        <TextGraphicsHeader
          header={"Total saída"}
          content={"4000"}
          footer={"Em 02/jun"}
        />
        <PieChartHeader percentage={20} />
      </S.ItemHeader>
    </S.Container>
  );
}
