import * as React from 'react';
import './index.less';

const prefixCls = `header`;
interface HeaderProps {
  path?: string
}

const Header: React.FC<HeaderProps> = ({ path }) => {
  return (
    <div className={prefixCls}>
      <div className={`${prefixCls}-logo`}>Naruto {path}</div>
    </div>
    )
}

export default Header;
