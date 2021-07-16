import * as S from "./styles";

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <S.Container>
      <S.Diveder></S.Diveder>
      <S.TextContainer>
        <S.Title>{title}</S.Title>
      </S.TextContainer>
    </S.Container>
  );
}
