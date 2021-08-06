import { Header } from "../../components/Header";
import { WalletListBox } from "../../components/WalletListBox";

import { useWalletSelector } from "../../hooks/useWallet";

import * as S from "./styles";

export function Wallet() {
  const walletState = useWalletSelector((state) => state.wallet);

  return (
    <S.Container>
      <Header title={"Wallet"} />
      <S.RowContainer>
        <WalletListBox titleHeader="Entradas" items={walletState.gains} />
        <WalletListBox titleHeader="Saídas" items={walletState.expenses} />
      </S.RowContainer>
    </S.Container>
  );
}
