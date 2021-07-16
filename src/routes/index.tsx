import { Switch } from "react-router-dom";

import { MyRoute } from "./MyRoute";

import { Dashboard } from "../pages/dashboard";
import { Wallet } from "../pages/wallet";

export function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Dashboard} />
      <MyRoute path="/wallet" component={Wallet} />
    </Switch>
  );
}
