import styled from "styled-components";
import * as fonts from "../../../../config/fonts";

export const Container = styled.div`
  width: 100%;
  padding: 0.75rem;
  display: flex;

  & + & {
    border-top: 2px solid rgba(0, 0, 0, 0.1);
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;
`;

export const IconContainer = styled(Div)`
  flex: 1;
  justify-content: center;
`;

export const Icon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.secundary};
`;

export const NameContainer = styled(Div)`
  flex: 3;
`;

export const DataContainer = styled(Div)`
  flex: 2;
`;

export const ValueContainer = styled(Div)`
  flex: 2;
`;

export const TextBold = styled.p`
  font-weight: 700;
  font-size: ${fonts.sm};
  color: ${(props) => props.theme.colors.text};
`;

export const TextDisabled = styled.p`
  font-size: ${fonts.sm};
  color: ${(props) => props.theme.colors.disabled};
`;
