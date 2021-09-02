import styled from "styled-components";
// import * as fonts from '../../config/fonts';
import { respondToDown } from "../../config/respondTo";

export const Container = styled.div`
  width: 100%;
  height: auto;
`;

export const FunctionBar = styled.div`
  width: 100%;
  height: auto;
  margin-top: 2rem;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  ${respondToDown.xs`
    padding: 0;
  `}
`;

export const RowContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 1rem;
  padding: 0 2rem;

  display: flex;
  flex-direction: column;

  ${respondToDown.xs`
    padding: 0;
  `}
`;
