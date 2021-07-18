import { createContext, ReactNode, useEffect, useState } from "react";

import * as I from "../utils/Interfaces";

import { data } from "../database";

interface IWalletContextType {
  gains: I.IWalletItemDB;
  expenses: I.IWalletItemDB;
}

type WalletContextProviderProps = {
  children: ReactNode;
};

export const WalletContext = createContext({} as IWalletContextType);

export function WalletContextProvider(props: WalletContextProviderProps) {
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
    <WalletContext.Provider value={{ gains, expenses }}>
      {props.children}
    </WalletContext.Provider>
  );
}
