import * as S from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface IProps {
  header: string;
  icon: IconDefinition;
  colorWhite: boolean;
}

export function TextIcon({ header, icon, colorWhite }: IProps) {
  return (
    <S.Container>
      <S.HeaderText colorWhite={colorWhite}>{header}</S.HeaderText>
      <S.Content colorWhite={colorWhite}>
        <FontAwesomeIcon icon={icon} size="lg" />
      </S.Content>
    </S.Container>
  );
}
