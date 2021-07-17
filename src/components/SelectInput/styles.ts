import styled from "styled-components";
// import * as fonts from "../../config/fonts";

export const Container = styled.div`
  > select {
    padding: 7px 10px;
    border-radius: 5px;
    border: 0;
    outline: 0px;
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.text};
    font-weight: 700;
    box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;
