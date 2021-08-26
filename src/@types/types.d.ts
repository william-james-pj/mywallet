export interface IWalletItem {
  type: string;
  amount: string;
  date: string;
  frequency: string;
}

export interface IWalletItemDB extends Array<IWalletItem> {}

export interface IObjInput {
  value: string;
}

interface IObjData {
  name: string;
  amount: number;
  percent: string;
  color: string;
}
