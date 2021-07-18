import { Header } from "../../components/Header";
import { WalletListBox } from "../../components/WalletListBox";
import { useWallet } from "../../hooks/useWallet";

import * as S from "./styles";

export function Wallet() {
  const { gains, expenses } = useWallet();

  return (
    <S.Container>
      <Header title={"Wallet"} />
      <S.RowContainer>
        <WalletListBox titleHeader="Entradas" items={gains} />
        <WalletListBox titleHeader="Saídas" items={expenses} />
      </S.RowContainer>
    </S.Container>
  );
}
