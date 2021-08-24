import styled from "styled-components";
// import * as fonts from "../../config/fonts";
import { respondToDown } from "../../../config/respondTo";

enum IItemHeaderEnum {
  balance,
  income,
  expense,
}

interface IItemHeaderProps {
  type: IItemHeaderEnum;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  ${respondToDown.sm`
    flex-direction: column;
    align-items: center;
  `}
`;

export const ItemHeader = styled.div<IItemHeaderProps>`
  height: 100%;
  flex: 1;

  padding: 1rem 1.25rem;
  box-shadow: 0px 1px 6px 1px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  transition: 1.5s;

  display: flex;
  align-items: center;

  background: ${(props) =>
    props.type === IItemHeaderEnum.balance
      ? props.theme.colors.primary
      : props.type === IItemHeaderEnum.expense
      ? props.theme.colors.expense
      : props.theme.colors.income};

  ${respondToDown.sm`
    width: 100%;
    padding: 1.563rem 1.25rem;
  `}
`;
