import * as S from "./styles";

interface IProps {
  header: string;
  content: string;
  colorWhite: boolean;
}

export function TextAmount({ header, content, colorWhite }: IProps) {
  return (
    <S.Container>
      <S.HeaderText colorWhite={colorWhite}>{header}</S.HeaderText>
      <S.ContentText colorWhite={colorWhite}>{`R$ ${content}`}</S.ContentText>
    </S.Container>
  );
}
