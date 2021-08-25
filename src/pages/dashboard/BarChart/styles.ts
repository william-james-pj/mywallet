import styled from "styled-components";
import * as fonts from "../../../config/fonts";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.normal};
  transition: 1.5s;
`;

export const Row = styled.div`
  flex: 1;

  display: flex;
`;

export const DescriptionContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const ChartContainer = styled.div`
  flex: 1;

  position: relative;
  display: flex;
  align-items: flex-end;
`;
