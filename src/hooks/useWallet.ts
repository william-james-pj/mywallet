import { useContext } from "react";
import { WalletContext } from "../contexts/WalletContextProvider";

export function useWallet() {
  const value = useContext(WalletContext);

  return value;
}
