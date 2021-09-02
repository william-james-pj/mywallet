import { useState, useMemo } from "react";

import { useReduxSelector } from "../../hooks/useRedux";

import { ModalAdd } from "../../components/ModalAdd";
import { Header } from "../../components/Header";
import { ButtonAdd } from "../../components/ButtonAdd";
import { FilterRecurrence } from "../../components/FilterRecurrence";
import { WalletListItem } from "../../components/WalletListItem";
import { filteredDate } from "../../utils/filteredDate";

import * as S from "./styles";

export function CashOut() {
  const walletState = useReduxSelector((state) => state.wallet);
  const dateState = useReduxSelector((state) => state.selectedDate);

  const [filterValue, setFilterValue] = useState("all");
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const changeFilter = (value: string) => {
    setFilterValue(value);
  };

  const data = useMemo(() => {
    let dataFiltered = filteredDate(
      walletState.expenses,
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
    walletState.expenses,
    dateState.monthSelected,
    dateState.yearSelected,
    filterValue,
  ]);

  return (
    <ModalAdd open={openModal} handleClose={handleModal} gains={false}>
      <S.Container>
        <Header title={"Cash out"} />
        <S.FunctionBar>
          <FilterRecurrence value={filterValue} change={changeFilter} />
          <ButtonAdd onclick={handleModal} />
        </S.FunctionBar>
        <S.RowContainer>
          {data.map((item, index) => {
            return <WalletListItem item={item} key={`${item.type}-${index}`} />;
          })}
        </S.RowContainer>
      </S.Container>
    </ModalAdd>
  );
}
