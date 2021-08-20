import { useState } from "react";
import { useLocation } from "react-router-dom";

import {
  faHome,
  faLongArrowAltRight,
  faTimes,
  faGripHorizontal,
} from "@fortawesome/free-solid-svg-icons";

import { IconColorMode } from "./IconColorMode";

import * as S from "./styled";

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

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
              <S.NavLink to="/">
                <S.NavIcons active={location.pathname === "/" ? true : false}>
                  <S.Icon icon={faHome} size="lg" rotate={1} />
                </S.NavIcons>
              </S.NavLink>
            </S.NavItem>

            <S.NavItem>
              <S.NavLink to="/cashin">
                <S.NavIcons
                  active={location.pathname === "/cashin" ? true : false}
                >
                  <S.Icon icon={faLongArrowAltRight} size="lg" rotate={-40} />
                </S.NavIcons>
              </S.NavLink>
            </S.NavItem>

            <S.NavItem>
              <S.NavLink to="/cashout">
                <S.NavIcons
                  active={location.pathname === "/cashout" ? true : false}
                >
                  <S.Icon icon={faLongArrowAltRight} size="lg" rotate={40} />
                </S.NavIcons>
              </S.NavLink>
            </S.NavItem>
          </S.NavList>

          <S.NavClose onClick={handleMenu}>
            <S.Icon icon={faTimes} size="1x" rotate={1} />
          </S.NavClose>
        </S.NavMenu>

        <S.NavBtns>
          <IconColorMode />
          <S.NavToggle onClick={handleMenu}>
            <S.Icon icon={faGripHorizontal} size="lg" rotate={1} />
          </S.NavToggle>
        </S.NavBtns>
      </S.NavContainer>
    </S.Container>
  );
}
