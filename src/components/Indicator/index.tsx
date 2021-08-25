import * as S from "./styles";

interface IIdicatorProps {
  value: string;
  income: boolean;
  description: string;
}

export function Indicator({ value, income, description }: IIdicatorProps) {
  return (
    <S.Container>
      <S.Square income={income}>
        <S.SquareText>{`${value}%`}</S.SquareText>
      </S.Square>
      <S.Description>{description}</S.Description>
    </S.Container>
  );
}
