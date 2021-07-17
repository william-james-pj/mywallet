import { Header } from "../../components/Header";
import { HeaderGraphics } from "../../components/HeaderGraphics";

import * as S from "./styles";

export function Dashboard() {
  return (
    <S.Container>
      <Header title={"Dashboard"} />
      <S.GraphicsContainer>
        <S.GraphicsHeader>
          <HeaderGraphics />
        </S.GraphicsHeader>
        <S.RowContainer>
          <S.MessageDiv></S.MessageDiv>
          <S.Relationship></S.Relationship>
        </S.RowContainer>
        <S.LineGraphic></S.LineGraphic>
        <S.RowContainer>
          <S.PizzaGraphic></S.PizzaGraphic>
          <S.PizzaGraphic></S.PizzaGraphic>
        </S.RowContainer>
      </S.GraphicsContainer>
    </S.Container>
  );
}
