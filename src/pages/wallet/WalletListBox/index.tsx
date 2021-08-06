import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

import { WalletListItem } from "./WalletListItem";
import { IWalletItemDB } from "../../../@types/types";

import * as S from "./styles";

interface IProps {
  items: IWalletItemDB;
  titleHeader: string;
}

export function WalletListBox({ items, titleHeader }: IProps) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <S.BoxContainer onClick={handleOpen}>
      <S.BoxHeader>
        <S.BoxHeaderText>{titleHeader}</S.BoxHeaderText>
        <S.Arrow>
          <FontAwesomeIcon icon={open ? faAngleUp : faAngleDown} size="sm" />
        </S.Arrow>
      </S.BoxHeader>
      <S.ListContainer active={open}>
        {items.map((item, index) => {
          return <WalletListItem item={item} key={`${item.type}-${index}`} />;
        })}
      </S.ListContainer>
    </S.BoxContainer>
  );
}
