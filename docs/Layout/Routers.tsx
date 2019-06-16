import * as React from 'react';
import { Route } from "react-router-dom";
import RouteConfig, { RouteItem } from './router';

interface IRoutersProps {
}

const Routers: React.SFC<IRoutersProps> = () => {

  const routeList: RouteItem[] = RouteConfig.reduce((res, e) => {
    res = [...res, ...e.route];
    return res;
  }, []);

  return (
    <React.Fragment>
      {
        routeList.map(e => (
          <Route
            key={e.name}
            path={e.path}
            component={e.component}
          />
        ))
      }
    </React.Fragment>
  )
}

export default Routers;
