import { SelectInput } from "../SelectInput";
import * as S from "./styles";

export function PickAMonth() {
  const year = [{ value: 2018 }, { value: 2019 }, { value: 2020 }];

  const month = [{ value: "Jan" }, { value: "Fev" }, { value: "Mar" }];

  return (
    <S.Container>
      <SelectInput options={month} />
      <SelectInput options={year} />
    </S.Container>
  );
}
