import { IWalletItemDB } from "../../@types/types";

export interface WalletState {
  gains: IWalletItemDB;
  expenses: IWalletItemDB;
}
