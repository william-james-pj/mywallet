import { useReduxSelector } from "../../hooks/useRedux";

import { Header } from "../../components/Header";
import { WalletListItem } from "../../components/WalletListItem";
import { filteredDate } from "../../utils/filteredDate";

import * as S from "./styles";

export function CashOut() {
  const walletState = useReduxSelector((state) => state.wallet);
  const dateState = useReduxSelector((state) => state.selectedDate);

  return (
    <S.Container>
      <Header title={"Cash out"} />
      <S.RowContainer>
        {filteredDate(
          walletState.expenses,
          dateState.monthSelected,
          dateState.yearSelected
        ).map((item, index) => {
          return <WalletListItem item={item} key={`${item.type}-${index}`} />;
        })}
      </S.RowContainer>
    </S.Container>
  );
}
