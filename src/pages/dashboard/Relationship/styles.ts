import styled from "styled-components";
import * as fonts from "../../../config/fonts";
import { respondToDown } from "../../../config/respondTo";

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
  flex: 1;
  padding-left: 1rem;

  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const GraphicsTitle = styled.p`
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.normal};
  transition: 1.5s;
`;

export const GraphicsChart = styled.div`
  flex: 1;
  overflow: hidden;
  position: relative;

  ${respondToDown.md`
    flex: 2;
  `}
`;
