import { useReduxSelector } from "../../hooks/useRedux";

import { Header } from "../../components/Header";
import { WalletListItem } from "../../components/WalletListItem";
import { filteredDate } from "../../utils/filteredDate";

import * as S from "./styles";

export function CashIn() {
  const walletState = useReduxSelector((state) => state.wallet);
  const dateState = useReduxSelector((state) => state.selectedDate);
  return (
    <S.Container>
      <Header title={"Cash in"} />
      <S.RowContainer>
        {filteredDate(
          walletState.gains,
          dateState.monthSelected,
          dateState.yearSelected
        ).map((item, index) => {
          return <WalletListItem item={item} key={`${item.type}-${index}`} />;
        })}
      </S.RowContainer>
    </S.Container>
  );
}
