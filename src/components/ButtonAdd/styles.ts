import styled from "styled-components";
import * as fonts from "../../config/fonts";

export const Container = styled.div`
  padding: 0.875rem 1.125rem;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 10px;

  cursor: pointer;
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.1);
  transition: 1.5s;

  :hover {
    opacity: 0.8;
  }
`;

export const Text = styled.p`
  font-weight: 700;
  font-size: ${fonts.normal};
  color: ${(props) => props.theme.colors.text};
`;
