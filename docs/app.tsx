import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Affix } from 'components'
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
                <Header path={params.location.pathname} />
                <div className={'container'}>
                  <Affix offsetTop={0}>
                    <Siderbar />
                  </Affix>
                  <div className={'content'}>
                    {children}
                  </div>
                  <Affix offsetTop={0}>
                    <FixedNav pathname={params.location.pathname} />
                  </Affix>
                </div>
              </div>
            )
        )}
      />
    </Router>
  );
}

ReactDOM.render(<App><Routers /></App>, document.getElementById('app'))
