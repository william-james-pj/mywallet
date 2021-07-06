import { Switch } from "react-router-dom";

import { MyRoute } from "./MyRoute";

import { Dashboard } from "../pages/dashboard";

export function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Dashboard} />
      {/* <MyRoute path="*" component={Home} /> */}
    </Switch>
  );
}
