import * as I from "../../utils/Interfaces";

import * as S from "./styles";

interface IProps {
  item: I.IWalletItem;
}

export function WalletListItem({ item }: IProps) {
  return (
    <S.Container>
      <S.IconContainer>
        <S.Icon></S.Icon>
      </S.IconContainer>
      <S.NameContainer>
        <S.TextBold>{item.type}</S.TextBold>
      </S.NameContainer>
      <S.DataContainer>
        <S.TextDisabled>{item.date}</S.TextDisabled>
      </S.DataContainer>
      <S.ValueContainer>
        <S.TextBold>{`R$ ${item.amount}`}</S.TextBold>
      </S.ValueContainer>
    </S.Container>
  );
}
