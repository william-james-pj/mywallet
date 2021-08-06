import { PickAMonth } from "./PickAMonth";

import * as S from "./styles";

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <S.Container>
      <S.RowContainer>
        <S.Diveder></S.Diveder>
        <S.TextContainer>
          <S.Title>{title}</S.Title>
        </S.TextContainer>
      </S.RowContainer>
      <PickAMonth />
    </S.Container>
  );
}
