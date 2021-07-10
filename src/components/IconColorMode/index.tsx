import { useDarkMode } from "../../hooks/useDarkMode";

import * as S from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export function IconColorMode() {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <S.ModeButtonView onClick={toggleTheme}>
      <FontAwesomeIcon
        icon={theme.title === "light" ? faMoon : faSun}
        size="lg"
      />
    </S.ModeButtonView>
  );
}
