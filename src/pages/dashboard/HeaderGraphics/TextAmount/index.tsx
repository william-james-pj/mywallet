import * as S from "./styles";

interface IProps {
  header: string;
  content: string;
  typeBox: number;
}

export function TextAmount({ header, content, typeBox }: IProps) {
  return (
    <S.Container>
      <S.HeaderText colorType={typeBox}>{header}</S.HeaderText>
      <S.ContentText>{`R$ ${content}`}</S.ContentText>
    </S.Container>
  );
}
