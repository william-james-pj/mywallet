import styled from "styled-components";
import * as fonts from "../../../config/fonts";

interface ISquare {
  income: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  overflow: hidden;
`;

export const Graphics = styled.div`
  display: flex;
  flex: 1;
`;

export const GraphicsText = styled.div`
  padding: 1.875rem;

  display: flex;
  gap: 1rem;
  flex-direction: column;
`;

export const GraphicsTitle = styled.p`
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.normal};
`;

export const IndicatorContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
`;

export const Square = styled.div<ISquare>`
  width: 50px;
  height: 40px;
  background: ${(props) =>
    props.income ? props.theme.colors.income : props.theme.colors.expense};

  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SquareText = styled.p`
  font-weight: 700;
  color: ${(props) => props.theme.colors.white};
  font-size: ${fonts.sm};
`;

export const Description = styled.p`
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.sm};
  margin-left: 0.625rem;
`;