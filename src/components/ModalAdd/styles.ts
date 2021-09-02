import styled from "styled-components";
import * as fonts from "../../config/fonts";
import { respondToDown } from "../../config/respondTo";

import { TextField, FormControlLabel, Radio } from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  width: auto;
  height: 50%;
  padding: 1rem 2rem;

  background: ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  ${respondToDown.sm`
    height: auto;
  `}
`;

export const Header = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: ${fonts.md};
  color: ${(props) => props.theme.colors.text};
`;

export const Content = styled.div`
  flex: 8;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;

  padding: 0 2rem;

  ${respondToDown.sm`
    align-items: center;
    padding: 2rem 1rem;
    gap: 1rem;
  `}
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;

  ${respondToDown.sm`
    justify-content: center;
    gap: 1rem;
  `}
`;

export const InputText = styled(TextField)`
  && {
    label {
      color: ${(props) => props.theme.colors.text};
    }
    & .MuiTextField-root {
      color: ${(props) => props.theme.colors.text};
    }
    & .MuiOutlinedInput-root fieldset {
      border-color: ${(props) => props.theme.colors.secundary};
    }
    & .MuiOutlinedInput-root .Mui-focused fieldset {
      border-color: ${(props) => props.theme.colors.secundary};
    }
    & .MuiSvgIcon-root {
      fill: ${(props) => props.theme.colors.text};
    }
  }
  width: 45%;
  font-size: ${fonts.normal};

  ${respondToDown.sm`
    width: 90%;
  `};
`;

export const DatePicker = styled(KeyboardDatePicker)`
  && {
    label {
      color: ${(props) => props.theme.colors.text};
    }
    & .MuiSvgIcon-root {
      fill: ${(props) => props.theme.colors.text};
    }
  }
`;

export const TextFormLabel = styled.span`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.sm};
`;

export const FormControlLabelS = styled(FormControlLabel)`
  && {
    color: ${(props) => props.theme.colors.text};
  }
`;

export const SRadio = styled(Radio)`
  && {
    color: ${(props) => props.theme.colors.text};
    &.Mui-checked {
      color: ${(props) => props.theme.colors.secundary};
    }
  }
`;

export const Footer = styled.div`
  flex: 2;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
`;

const Button = styled.div`
  padding: 0.875rem 1.125rem;
  border-radius: 10px;

  cursor: pointer;
  transition: 0.6s;

  font-weight: 700;
  font-size: ${fonts.normal};
  color: ${(props) => props.theme.colors.text};

  :hover {
    opacity: 0.8;
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
  }
`;

export const ButtonAdd = styled(Button)`
  background: ${(props) => props.theme.colors.income};
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.1);
`;

export const ButtonCancel = styled(Button)`
  background: ${(props) => props.theme.colors.primary};
`;
