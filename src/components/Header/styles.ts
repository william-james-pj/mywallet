import styled from "styled-components";
import * as fonts from "../../config/fonts";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RowContainer = styled.div`
  display: flex;
`;

export const Diveder = styled.div`
  height: auto;
  padding: 1.25rem 0;
  border-left: 3px solid ${(props) => props.theme.colors.secundary};
  border-radius: 10px;
  margin-right: 1rem;
`;

export const TextContainer = styled.div``;

export const Title = styled.p`
  font-weight: 700;
  font-size: ${fonts.xl};
  color: ${(props) => props.theme.colors.secundary};
`;
