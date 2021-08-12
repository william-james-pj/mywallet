import styled from "styled-components";
import * as fonts from "../../../../config/fonts";

interface IColorWhite {
  colorWhite: boolean;
}

export const Container = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;

export const HeaderText = styled.p<IColorWhite>`
  font-weight: 700;
  color: ${(props) =>
    !props.colorWhite
      ? props.theme.colors.disabledBlack
      : props.theme.colors.disabled};
  font-size: ${fonts.sm};
`;

export const ContentText = styled.p<IColorWhite>`
  font-weight: 700;
  font-size: ${fonts.lg};
  color: ${(props) =>
    props.colorWhite ? props.theme.colors.white : props.theme.colors.text};

  margin: 0.75rem 0;
`;
