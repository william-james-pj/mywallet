import styled from "styled-components";
import * as fonts from "../../../../config/fonts";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

interface IIconProps extends FontAwesomeIconProps {
  rotate: number;
}

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const HeaderText = styled.p`
  font-weight: 700;
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.sm};
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
`;
