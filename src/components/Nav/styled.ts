import styled, { DefaultTheme } from "styled-components";
import * as fonts from "../../config/fonts";
import { respondToDown, respondToUp } from "../../config/respondTo";

interface IIconProps {
  active: boolean;
}

interface IIconQueryProps extends IIconProps {
  theme: DefaultTheme;
}

interface INavMenuProps {
  menuOpen: boolean;
}

interface INavMenuQueryProps extends INavMenuProps {
  theme: DefaultTheme;
}

export const Container = styled.div`
  background: ${(props) => props.theme.colors.primary};
  transition: 2s;

  ${respondToUp.sm`
    width: 90px;
    position: relative;
  `}

  ${respondToDown.sm`
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 99;
  `}
`;

export const NavContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  column-gap: 1rem;
  padding: 20px 0;
  margin: 0;

  ${respondToDown.sm`
    height: 3rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  `}
`;

export const NavLogo = styled.a`
  font-weight: 500;
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  user-select: none;

  :hover {
    color: ${(props) => props.theme.colors.secundary};
  }

  ${respondToUp.sm`
    display: none;
  `}
`;

export const NavMenu = styled.div<INavMenuProps>`
  ${({ menuOpen, theme }: INavMenuQueryProps) => respondToDown.sm`
    background: ${theme.colors.primary};
    position: fixed;
    bottom: ${menuOpen ? "0" : "-100%"};
    left: 0;
    width: 100%;
    padding: 2rem 1.5rem 4rem;
    box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
    border-radius: 1.5rem 1.5rem 0 0;
    transition: 0.3s;
  `}

  ${respondToDown.xs`
    padding: 2rem 0.25rem 4rem;
  `}
`;

export const NavList = styled.ul`
  ${respondToDown.sm`
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
  `}

  ${respondToDown.xs`
    column-gap: 0;
  `}

  ${respondToUp.sm`
    display: flex;
    flex-direction: column;
    gap: 16px;  
    column-gap: 2rem;
  `}
`;

export const NavItem = styled.li`
  -webkit-tap-highlight-color: transparent;
`;

export const NavIcons = styled.div<IIconProps>`
  margin-bottom: 5px;

  ${({ active, theme }: IIconQueryProps) => respondToUp.sm`
    margin-bottom: 0;
    padding: 0.7rem;
    border-radius: 50%;
    transition: 0.6s;

    box-shadow: ${active ? "0px 6px 8px 2px rgba(0, 0, 0, 0.3)" : "none"};
    background: ${theme.colors.primary};
    color: ${active ? theme.colors.secundary : theme.colors.disabled};

    :hover {
      box-shadow: 0px 6px 8px 2px rgba(0, 0, 0, 0.3);
      color: ${theme.colors.secundary};
    }
  `}
`;

export const NavLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${fonts.sm};
  font-weight: 500;

  cursor: pointer;
  user-select: none;
`;

export const NavClose = styled.div`
  position: absolute;
  right: 1.3rem;
  bottom: 0.5rem;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${(props) => props.theme.colors.text};
  -webkit-tap-highlight-color: transparent;

  :hover {
    color: ${(props) => props.theme.colors.secundary};
  }

  ${respondToUp.sm`
      display: none;
  `}
`;

export const NavBtns = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const NavToggle = styled.div`
  font-weight: 500;
  color: ${(props) => props.theme.colors.text};

  font-size: 1.1rem;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  :hover {
    color: ${(props) => props.theme.colors.secundary};
  }

  ${respondToUp.sm`
      display: none;
  `}
`;
