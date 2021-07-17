import styled from "styled-components";
// import * as fonts from '../../config/fonts';

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

  background: ${(props) => props.theme.colors.primary};
  border-radius: 20px;
`;

export const GraphicsHeader = styled(graphics)`
  width: 100%;
  height: 150px;
  padding: 1.5rem;
`;

export const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MessageDiv = styled(graphics)`
  width: 50%;
  height: 200px;
`;

export const Relationship = styled(graphics)`
  width: 40%;
  height: 200px;
`;

export const LineGraphic = styled(graphics)`
  width: 100%;
  height: 300px;
`;

export const PizzaGraphic = styled(graphics)`
  width: 45%;
  height: 250px;
`;
