import { Redirect, Route, RouteProps } from 'react-router-dom';

type MyRouteProps = {
  isClosed?: boolean;
} & RouteProps;

export function MyRoute({ isClosed = false, ...routeProps }: MyRouteProps) {
  if (!isClosed) {
    return <Route {...routeProps} />;
  } else {
    return <Redirect to={{ pathname: '/' }} />;
  }
}
