import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Header from './Layout/Header';
import Siderbar from './Layout/Siderbar';
import Routers from './Layout/Routers';
import RouteList from './Layout/router';
import './index.less';

const App: React.SFC = ({ children }) => {
  return (
    <Router>
      <Route
        path='/'
        children={(params) => (
          params.location.pathname === '/' ?
            <Redirect to={RouteList[0].route[0].path} /> :
            (
              <div className={'layout'}>
                <Header />
                <div className={'container'}>
                  <Siderbar />
                  <div className={'content'}>
                    {children}
                  </div>
                </div>
              </div>
            )
        )}
      />
    </Router>
  );
}

ReactDOM.render(<App><Routers /></App>, document.getElementById('app'))
