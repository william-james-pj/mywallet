import * as S from "./styles";

interface ISelectProps {
  options: {
    value: string | number;
  }[];
  onChange: (value: string) => void;
  defaultValue?: string;
}

export function SelectInput({ options, onChange, defaultValue }: ISelectProps) {
  return (
    <S.Container>
      <select onChange={(e) => onChange(e.target.value)} value={defaultValue}>
        {options.map((option, index) => {
          return (
            <option key={`${option.value}-${index}`} value={option.value}>
              {option.value}
            </option>
          );
        })}
      </select>
    </S.Container>
  );
}
