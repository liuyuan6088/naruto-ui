import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Header from './layout/Header';
import Siderbar from './layout/Siderbar';
import FixedNav from './layout/FixedNav';
import Routers from './layout/Routers';
import RouteList from './layout/router';
import './index.less';

const App: React.SFC = ({ children }) => {

  return (
    <Router>
      <Route
        path='/'
        children={(params) => (
          ['/', '/naruto-ui'].includes(params.location.pathname) ?
            <Redirect to={RouteList[0].route[0].path} /> :
            (
              <div className={'layout'}>
                <Header />
                <div className={'container'}>
                  <Siderbar />
                  <div className={'content'}>
                    {children}
                  </div>
                  <FixedNav pathname={params.location.pathname} />
                </div>
              </div>
            )
        )}
      />
    </Router>
  );
}

ReactDOM.render(<App><Routers /></App>, document.getElementById('app'))
