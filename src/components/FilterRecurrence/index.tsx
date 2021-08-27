import * as S from "./styles";

interface IFilterRecurrenceProps {
  value: string;
  change: (value: string) => void;
}

export function FilterRecurrence({ value, change }: IFilterRecurrenceProps) {
  return (
    <S.Container>
      <select value={value} onChange={(e) => change(e.target.value)}>
        <option value="all">All</option>
        <option value="recurrent">Recurrent</option>
        <option value="occasional">Occasional</option>
      </select>
    </S.Container>
  );
}
