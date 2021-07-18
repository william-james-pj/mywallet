import styled from "styled-components";
import * as fonts from "../../config/fonts";
import { respondToDown } from "../../config/respondTo";

interface ListContainerProps {
  active: boolean;
}

export const BoxContainer = styled.div`
  width: 45%;
  height: 100%;
  cursor: pointer;

  ${respondToDown.sm`
    width: 100%;
    height: auto;
  `}
`;

export const BoxHeader = styled.div`
  width: 100%;
  height: 40px;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 5px;
  box-shadow: 0px 1px 6px 1px rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;

export const BoxHeaderText = styled.p`
  font-weight: 700;
  font-size: ${fonts.normal};
  color: ${(props) => props.theme.colors.text};
`;

export const Arrow = styled.span`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.text};
  margin-left: auto;
`;

export const ListContainer = styled.div<ListContainerProps>`
  height: ${(props) => (props.active ? "max-content" : "0")};
  overflow: ${(props) => (props.active ? "none" : "hidden")};
`;
