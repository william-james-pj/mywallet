import GlobalStyle from "./styles/global";

import { Provider } from "react-redux";
import store from "./store";

import { ColorModeContext } from "./contexts/ColorModeContext";

import { Router } from "react-router-dom";
import { history } from "./services/history";
import { Home } from "./layout/Home";

function App() {
  return (
    <ColorModeContext>
      <GlobalStyle />
      <Router history={history}>
        <Provider store={store}>
          <Home />
        </Provider>
      </Router>
    </ColorModeContext>
  );
}

export default App;
