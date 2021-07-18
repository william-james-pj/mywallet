import { useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { WalletListBox } from "../../components/WalletListBox";
import * as I from "../../utils/Interfaces";

import { data } from "../../database";

import * as S from "./styles";

export function Wallet() {
  const [gains, setGains] = useState<I.IWalletItemDB>([]);
  const [expenses, setExpenses] = useState<I.IWalletItemDB>([]);

  const getData = () => {
    setGains(data.gains);
    setExpenses(data.expenses);
  };

  useEffect(() => {
    getData();
    return () => {};
  }, []);

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
