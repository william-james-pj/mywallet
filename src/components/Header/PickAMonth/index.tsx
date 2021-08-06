import { useReduxDispatch, useReduxSelector } from "../../../hooks/useRedux";
import { setMonthSelected, setYearSelected } from "../../../store/selectedDate";

import { SelectInput } from "../SelectInput";

import * as S from "./styles";

export function PickAMonth() {
  const dispatch = useReduxDispatch();
  const dateState = useReduxSelector((state) => state.selectedDate);

  const setYear = (value: string) => {
    dispatch(setYearSelected(value));
  };

  const setMonth = (value: string) => {
    dispatch(setMonthSelected(value));
  };

  return (
    <S.Container>
      <SelectInput
        options={dateState.months}
        onChange={setMonth}
        defaultValue={dateState.monthSelected}
      />
      <SelectInput
        options={dateState.years}
        onChange={setYear}
        defaultValue={dateState.yearSelected}
      />
    </S.Container>
  );
}
