import * as React from 'react';
import { NavLink } from "react-router-dom";
import RouteConfig from './router';
import './index.less';

const prefixCls = `siderbar`;

interface ISiderbarProps {}

const Siderbar: React.FC<ISiderbarProps> = () => {

  return (
    <div className={prefixCls}>
      {
        RouteConfig.map(e => (
          <div key={e.title} className={`${prefixCls}-box`}>
            <div className={`${prefixCls}-title`}>{e.title}</div>
            <ul className={`${prefixCls}-link`}>
              <li>
                {
                  e.route.map(item => (
                    <NavLink
                      key={item.key}
                      to={item.path}
                      activeClassName={`${prefixCls}-active`}
                    >
                      {item.name}
                    </NavLink>
                  ))
                }
              </li>
            </ul>
          </div>
        ))
      }
    </div>
    )
}

export default Siderbar;
