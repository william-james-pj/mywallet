import styled from "styled-components";
// import * as fonts from "../../config/fonts";
import { respondToDown } from "../../config/respondTo";

export const Container = styled.div``;

export const RowContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;

  ${respondToDown.sm`
    flex-direction: column;
    gap: 1rem;
  `}
`;
