import { Header } from "../../components/Header";

import { useReduxSelector } from "../../hooks/useRedux";
import { formatMonth } from "../../utils/formatMonth";

import { WalletListBox } from "./WalletListBox";
import { IWalletItemDB } from "../../@types/types";

import * as S from "./styles";

export function Wallet() {
  const walletState = useReduxSelector((state) => state.wallet);
  const dateState = useReduxSelector((state) => state.selectedDate);

  const filteredDate = (items: IWalletItemDB): IWalletItemDB => {
    return items.filter((item) => {
      const date = new Date(item.date);
      const month = formatMonth(date);
      const year = String(date.getFullYear());

      return (
        month === dateState.monthSelected && year === dateState.yearSelected
      );
    });
  };

  return (
    <S.Container>
      <Header title={"Wallet"} />
      <S.RowContainer>
        <WalletListBox
          titleHeader="Entradas"
          items={filteredDate(walletState.gains)}
        />
        <WalletListBox
          titleHeader="Saídas"
          items={filteredDate(walletState.expenses)}
        />
      </S.RowContainer>
    </S.Container>
  );
}
