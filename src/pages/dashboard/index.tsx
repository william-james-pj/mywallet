import { Header } from "../../components/Header";

import * as S from "./styles";

export function Dashboard() {
  return (
    <S.Container>
      <Header title={"Dashboard"} />
      <S.GraphicsContainer>
        <S.GraphicsHeader></S.GraphicsHeader>
        <S.LineGraphic></S.LineGraphic>
        <S.ContainerRow>
          <S.PizzaGraphic></S.PizzaGraphic>
          <S.PizzaGraphic></S.PizzaGraphic>
        </S.ContainerRow>
      </S.GraphicsContainer>
    </S.Container>
  );
}
