import { IWalletItem } from "../../@types/types";
import { formatCurrency } from "../../utils/formatCurrency";
import { formatDateYear } from "../../utils/formatDate";

import * as S from "./styles";

interface IProps {
  item: IWalletItem;
}

export function WalletListItem({ item }: IProps) {
  return (
    <S.Container>
      <S.Divider
        recurrent={item.frequency === "Recurrent" ? true : false}
      ></S.Divider>
      <S.IconContainer>
        <S.Icon></S.Icon>
      </S.IconContainer>
      <S.NameContainer>
        <S.TextBold>{item.type}</S.TextBold>
      </S.NameContainer>
      <S.DataContainer>
        <S.TextDisabled>{formatDateYear(item.date)}</S.TextDisabled>
      </S.DataContainer>
      <S.ValueContainer>
        <S.TextBold>{formatCurrency(Number(item.amount))}</S.TextBold>
      </S.ValueContainer>
    </S.Container>
  );
}
