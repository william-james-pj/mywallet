import { useState, useMemo } from "react";

import { useReduxSelector } from "../../hooks/useRedux";

import { Header } from "../../components/Header";
import { FilterRecurrence } from "../../components/FilterRecurrence";
import { WalletListItem } from "../../components/WalletListItem";
import { filteredDate } from "../../utils/filteredDate";

import * as S from "./styles";

export function CashIn() {
  const walletState = useReduxSelector((state) => state.wallet);
  const dateState = useReduxSelector((state) => state.selectedDate);

  const [filterValue, setFilterValue] = useState("all");

  const changeFilter = (value: string) => {
    setFilterValue(value);
  };

  const data = useMemo(() => {
    let dataFiltered = filteredDate(
      walletState.gains,
      dateState.monthSelected,
      dateState.yearSelected
    );

    let filteType =
      filterValue === "all"
        ? "All"
        : filterValue === "recurrent"
        ? "Recurrent"
        : "Occasional";

    if (filteType !== "All")
      dataFiltered = dataFiltered.filter(
        (item) => item.frequency === filteType
      );

    return dataFiltered;
  }, [
    walletState.gains,
    dateState.monthSelected,
    dateState.yearSelected,
    filterValue,
  ]);

  return (
    <S.Container>
      <Header title={"Cash in"} />
      <S.FunctionBar>
        <FilterRecurrence value={filterValue} change={changeFilter} />
      </S.FunctionBar>
      <S.RowContainer>
        {data.map((item, index) => {
          return <WalletListItem item={item} key={`${item.type}-${index}`} />;
        })}
      </S.RowContainer>
    </S.Container>
  );
}
