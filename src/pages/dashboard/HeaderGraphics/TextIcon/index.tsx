import * as S from "./styles";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface IProps {
  header: string;
  icon: IconDefinition;
  typeBox: number;
}

export function TextIcon({ header, icon, typeBox }: IProps) {
  return (
    <S.Container>
      <S.HeaderText>{header}</S.HeaderText>
      <S.Content>
        <S.Icon icon={icon} size="lg" typeBox={typeBox} />
      </S.Content>
    </S.Container>
  );
}
