import * as React from 'react';
import './index.less';

const prefixCls = `header`;

const Header: React.FC = () => {
  return (
    <div className={prefixCls}>
      <div className={`${prefixCls}-logo`}>Naruto</div>
    </div>
    )
}

export default Header;
