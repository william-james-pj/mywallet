import styled from "styled-components";
import * as fonts from "../../../../config/fonts";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const HeaderText = styled.p`
  font-weight: 700;
  color: ${(props) => props.theme.colors.disabled};
`;

export const ContentText = styled.p`
  font-weight: 700;
  font-size: ${fonts.md};
  color: ${(props) => props.theme.colors.text};

  margin: 0.75rem 0;
`;

export const FooterText = styled.p`
  font-weight: 700;
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.sm};
`;
