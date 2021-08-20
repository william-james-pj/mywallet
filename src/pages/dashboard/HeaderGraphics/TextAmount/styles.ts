import styled from "styled-components";
import * as fonts from "../../../../config/fonts";

export const Container = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;

export const HeaderText = styled.p`
  font-weight: 700;
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.sm};
`;

export const ContentText = styled.p`
  font-weight: 700;
  font-size: ${fonts.lg};
  color: ${(props) => props.theme.colors.text};

  margin: 0.75rem 0;
`;
