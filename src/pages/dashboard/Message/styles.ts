import styled from "styled-components";
import * as fonts from "../../../config/fonts";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
`;

export const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  padding: 1.875rem;
`;

export const Title = styled.p`
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.md};
`;

export const Text = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.normal};

  margin-top: 1rem;
`;
