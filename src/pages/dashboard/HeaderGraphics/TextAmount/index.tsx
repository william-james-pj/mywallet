import * as S from "./styles";

interface IProps {
  header: string;
  content: string;
}

export function TextAmount({ header, content }: IProps) {
  return (
    <S.Container>
      <S.HeaderText>{header}</S.HeaderText>
      <S.ContentText>{`R$ ${content}`}</S.ContentText>
    </S.Container>
  );
}
