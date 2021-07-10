import { Routes } from "../../routes";

import { Nav } from "../../components/Nav";

import * as S from "./styles";

export function Home() {
  return (
    <S.Container>
      <Nav />
      <S.Content>
        <Routes />
      </S.Content>
    </S.Container>
  );
}
