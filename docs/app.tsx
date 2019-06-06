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
  const transform = x => x.replace(/<h2>(.*?)<\/h2>/g, `<h2 id="$1">$1</h2>`);
  console.log(transform('<h2>1</h2><h2>2</h2>'));
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
