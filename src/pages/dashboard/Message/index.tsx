import * as S from "./styles";

interface IMessageProps {
  data: {
    title: string;
    description: string;
  };
}

export function Message({ data }: IMessageProps) {
  return (
    <S.Container>
      <S.TextContainer>
        <S.Title>{data.title}</S.Title>
        <S.Text>{data.description}</S.Text>
      </S.TextContainer>
    </S.Container>
  );
}
