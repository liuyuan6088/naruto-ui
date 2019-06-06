import * as React from 'react';
import Cold from './Prism';
import { Icon } from 'components';
import './index.less';

const { useState } = React;
const prefixCls = `code`;

interface IconProps {
  code?: any,
}

const CodeBlock: React.FC<IconProps> = React.memo(({ children, code }) => {

  const [open, setOpen] = useState<boolean>(false);
  
  return (
    <section className={`${prefixCls}-block`}>
      <div className={`${prefixCls}-block-header`}>
        { children }
      </div>
      <div className={`${prefixCls}-block-description dash`}>
        <Icon type='code' onClick={() => setOpen(!open)} />
      </div>
      <div className={`${prefixCls}-block-code ${open ? 'open' : null}`}>
        <Cold>{code}</Cold>
        <div onClick={() => setOpen(false)} className={`${prefixCls}-block-close`}>{'收起代码'}</div>
      </div>
    </section>
  )
})

export default CodeBlock;
