import { useEffect } from "react";
import { Routes } from "../../routes";

import { useWalletDispatch } from "../../hooks/useWallet";
import { getData } from "../../store/wallet";

import { Nav } from "../../components/Nav";

import * as S from "./styles";

export function Home() {
  const dispatch = useWalletDispatch();

  useEffect(() => {
    dispatch(getData());
    return () => {};
  }, [dispatch]);

  return (
    <S.Container>
      <Nav />
      <S.Content>
        <Routes />
      </S.Content>
    </S.Container>
  );
}
