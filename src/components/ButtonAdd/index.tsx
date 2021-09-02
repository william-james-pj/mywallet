import * as S from "./styles";

interface IButtonAddProps {
  onclick: () => void;
}

export function ButtonAdd({ onclick }: IButtonAddProps) {
  return (
    <S.Container onClick={() => onclick()}>
      <S.Text>Add</S.Text>
    </S.Container>
  );
}
