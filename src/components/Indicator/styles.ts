import styled from "styled-components";
import * as fonts from "../../config/fonts";

interface ISquare {
  income: boolean;
}

export const Container = styled.div`
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
  transition: 1.5s;
`;

export const SquareText = styled.p`
  font-weight: 700;
  color: ${(props) => props.theme.colors.white};
  font-size: ${fonts.sm};
  transition: 1.5s;
`;

export const Description = styled.p`
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.sm};
  margin-left: 0.625rem;
  transition: 1.5s;
`;
