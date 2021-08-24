import styled from "styled-components";
// import * as fonts from '../../config/fonts';
import { respondToDown } from "../../config/respondTo";

export const Container = styled.div``;

export const GraphicsContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 2rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const graphics = styled.div`
  box-shadow: 0px 1px 10px 1px rgba(0, 0, 0, 0.3);
  transition: 1.5s;

  background: ${(props) => props.theme.colors.primary};
  border-radius: 20px;
`;

export const GraphicsHeader = styled.div`
  width: 100%;
  height: 150px;

  ${respondToDown.sm`
    height: auto;
  `}
`;

export const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;

  ${respondToDown.sm`
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  `}
`;

export const MessageDiv = styled(graphics)`
  width: 40%;
  height: 200px;

  ${respondToDown.sm`
    width: 100%;
  `}
`;

export const RelationshipContainer = styled(graphics)`
  width: 50%;
  height: 200px;

  ${respondToDown.sm`
    width: 100%;
  `}
`;

export const LineGraphic = styled(graphics)`
  width: 100%;
  height: 300px;
`;

export const PizzaGraphic = styled(graphics)`
  width: 45%;
  height: 250px;

  ${respondToDown.sm`
    width: 100%;
  `}
`;
