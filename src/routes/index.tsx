import { Switch } from "react-router-dom";

import { MyRoute } from "./MyRoute";

import { Dashboard } from "../pages/dashboard";
import { CashIn } from "../pages/CashIn";
import { CashOut } from "../pages/cashOut";

export function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Dashboard} />
      <MyRoute exact path="/cashin" component={CashIn} />
      <MyRoute exact path="/cashout" component={CashOut} />
    </Switch>
  );
}
