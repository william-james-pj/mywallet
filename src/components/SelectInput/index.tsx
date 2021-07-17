import * as S from "./styles";

interface ISelectProps {
  options: {
    value: string | number;
  }[];
}

export function SelectInput({ options }: ISelectProps) {
  return (
    <S.Container>
      <select>
        {options.map((option) => {
          return <option value={option.value}>{option.value}</option>;
        })}
      </select>
    </S.Container>
  );
}
