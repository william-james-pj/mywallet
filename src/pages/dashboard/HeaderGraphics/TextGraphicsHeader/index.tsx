import * as S from "./styles";

interface IProps {
  header: string;
  content: string;
  footer: string;
}

export function TextGraphicsHeader({ header, content, footer }: IProps) {
  return (
    <S.Container>
      <S.HeaderText>{header}</S.HeaderText>
      <S.ContentText>{`R$ ${content}`}</S.ContentText>
      <S.FooterText>{footer}</S.FooterText>
    </S.Container>
  );
}
