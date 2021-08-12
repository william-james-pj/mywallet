import styled from "styled-components";
import * as fonts from "../../../../config/fonts";

interface IColorWhite {
  colorWhite: boolean;
}

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const HeaderText = styled.p<IColorWhite>`
  font-weight: 700;
  color: ${(props) =>
    !props.colorWhite
      ? props.theme.colors.disabledBlack
      : props.theme.colors.disabled};
  font-size: ${fonts.sm};
`;

export const Content = styled.div<IColorWhite>`
  font-size: ${fonts.xl};
  color: ${(props) =>
    props.colorWhite ? props.theme.colors.white : props.theme.colors.text};

  margin: 0.75rem 0;
`;
