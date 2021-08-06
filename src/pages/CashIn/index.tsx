import { useReduxSelector } from "../../hooks/useRedux";

import { Header } from "../../components/Header";
import { WalletListItem } from "../../components/WalletListItem";
import { formatMonth } from "../../utils/formatMonth";
import { IWalletItemDB } from "../../@types/types";

import * as S from "./styles";

export function CashIn() {
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
      <Header title={"Cash in"} />
      <S.RowContainer>
        {filteredDate(walletState.gains).map((item, index) => {
          return <WalletListItem item={item} key={`${item.type}-${index}`} />;
        })}
      </S.RowContainer>
    </S.Container>
  );
}
