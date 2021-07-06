import GlobalStyle from "./styles/global";

import { ColorModeContext } from "./contexts/ColorModeContext";

import { Router } from "react-router-dom";
import { history } from "./services/history";
import { Home } from "./layout/Home";

function App() {
  return (
    <ColorModeContext>
      <GlobalStyle />
      <Router history={history}>
        <Home />
      </Router>
    </ColorModeContext>
  );
}

export default App;
