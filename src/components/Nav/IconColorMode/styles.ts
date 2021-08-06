import styled from "styled-components";
import * as fonts from "../../../config/fonts";

export const ModeButtonView = styled.div`
  font-size: ${fonts.sm};
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
`;
