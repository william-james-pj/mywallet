import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faWallet,
  faTimes,
  faGripHorizontal,
} from "@fortawesome/free-solid-svg-icons";

import { IconColorMode } from "../../components/IconColorMode";

import * as S from "./styled";

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <S.Container>
      <S.NavContainer>
        <S.NavLogo>My wallet</S.NavLogo>
        <S.NavMenu menuOpen={menuOpen}>
          <S.NavList>
            <S.NavItem>
              <S.NavLink>
                <S.NavIcons active={true}>
                  <FontAwesomeIcon icon={faHome} size="lg" />
                </S.NavIcons>
              </S.NavLink>
            </S.NavItem>

            <S.NavItem>
              <S.NavLink>
                <S.NavIcons active={false}>
                  <FontAwesomeIcon icon={faWallet} size="lg" />
                </S.NavIcons>
              </S.NavLink>
            </S.NavItem>
          </S.NavList>

          <S.NavClose onClick={handleMenu}>
            <FontAwesomeIcon icon={faTimes} size="1x" />
          </S.NavClose>
        </S.NavMenu>

        <S.NavBtns>
          <IconColorMode />
          <S.NavToggle onClick={handleMenu}>
            <FontAwesomeIcon icon={faGripHorizontal} size="lg" />
          </S.NavToggle>
        </S.NavBtns>
      </S.NavContainer>
    </S.Container>
  );
}
