import { useEffect } from "react";
import { Routes } from "../../routes";

import { useReduxDispatch, useReduxSelector } from "../../hooks/useRedux";
import { getData } from "../../store/wallet";
import { setYears, setMonths } from "../../store/selectedDate";

import { Nav } from "../../components/Nav";

import * as S from "./styles";

export function Home() {
  const dispatch = useReduxDispatch();
  const walletState = useReduxSelector((state) => state.wallet);

  useEffect(() => {
    dispatch(getData());
    return () => {};
  }, [dispatch]);

  useEffect(() => {
    dispatch(setYears(walletState.gains));
    dispatch(setYears(walletState.expenses));

    dispatch(setMonths());
    return () => {};
  }, [dispatch, walletState.gains, walletState.expenses]);

  return (
    <S.Container>
      <Nav />
      <S.Content>
        <Routes />
      </S.Content>
    </S.Container>
  );
}
