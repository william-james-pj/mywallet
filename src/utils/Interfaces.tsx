export interface IWalletItem {
  type: string;
  amount: string;
  date: string;
  frequency: string;
}

export interface IWalletItemDB extends Array<IWalletItem> {}
