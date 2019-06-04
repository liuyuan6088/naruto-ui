import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import './index.less';
import Button from './components/Button';

const Routers: React.SFC = () => {
  return (
    <div>
      <Route exact={true} path="/" component={Button} />
      <Route path="/button" component={Button} />
    </div>
  )
}

const App: React.SFC = ({ children }) => {
  return (
    <Router>
      <div className={'layout'}>
        <div className={'header'}>
          <div className={'logo'}>Naruto</div>
        </div>
        <div className={'container'}>
          <div className={'siderbar'}>
            <Link to="/button">button</Link>
          </div>
          <div className={'content'}>
            {children}
          </div>
        </div>
      </div>
    </Router>
  );
}

ReactDOM.render(<App><Routers /></App>, document.getElementById('app'))
