import styled from "styled-components";
import * as fonts from "../../../../config/fonts";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

interface IIconProps extends FontAwesomeIconProps {
  rotate: number;
}

interface IColor {
  colorType: number;
}

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const HeaderText = styled.p<IColor>`
  font-weight: 700;
  color: ${(props) =>
    props.colorType === 4
      ? props.theme.colors.disabled
      : props.theme.colors.background};
  font-size: ${fonts.sm};
  transition: 1.5s;
`;

export const Content = styled.div`
  font-size: ${fonts.xl};
  color: ${(props) => props.theme.colors.text};

  margin: 0.75rem 0;
`;

export const Icon = styled(FontAwesomeIcon)<IIconProps>`
  transform: ${(props) =>
    props.rotate === 2
      ? `rotate(-40deg)`
      : props.rotate === 3
      ? `rotate(40deg)`
      : ""};
  transition: 1.5s;
`;
