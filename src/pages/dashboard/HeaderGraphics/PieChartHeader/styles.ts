import styled from "styled-components";
import * as fonts from "../../../../config/fonts";

export const Container = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Text = styled.text`
  font-weight: 700;
  fill: ${(props) => props.theme.colors.text};
  font-size: ${fonts.sm};
`;
