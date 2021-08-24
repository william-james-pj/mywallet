import styled from "styled-components";
import * as fonts from "../../../../config/fonts";

interface IColor {
  colorType: number;
}

export const Container = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;

export const HeaderText = styled.p<IColor>`
  font-weight: 700;
  color: ${(props) =>
    props.colorType === 1
      ? props.theme.colors.disabled
      : props.theme.colors.background};
  font-size: ${fonts.sm};
  transition: 1.5s;
`;

export const ContentText = styled.p`
  font-weight: 700;
  font-size: ${fonts.lg};
  color: ${(props) => props.theme.colors.text};

  margin: 0.75rem 0;
  transition: 1.5s;
`;
