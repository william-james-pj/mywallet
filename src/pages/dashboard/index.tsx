import { Header } from "../../components/Header";
import { HeaderGraphics } from "./HeaderGraphics";
import { HistoryChart } from "./HistoryChart";
import { Message } from "./Message";
import { Relationship } from "./Relationship";

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
          <S.PizzaGraphic></S.PizzaGraphic>
          <S.PizzaGraphic></S.PizzaGraphic>
        </S.RowContainer>
      </S.GraphicsContainer>
    </S.Container>
  );
}
