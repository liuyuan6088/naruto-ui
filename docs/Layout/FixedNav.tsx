import * as React from 'react';
import config from './fixedConfig';
import './index.less';

const prefixCls = `fixedNav`;
const { useState } = React;

const scrollToAnchor = (anchorName: string) => {
  if (anchorName) {
      let anchorElement = document.getElementById(anchorName);
      if(anchorElement) { anchorElement.scrollIntoView({block: 'start', behavior: 'smooth'}); }
  }
}

interface IFixedNav {
  pathname?: string,
}

const FixedNav: React.FC<IFixedNav> = ({ pathname }) => {

  const [index, setIndex] = useState<number>(0)

  const list = config.get(pathname) || [];

  return (
    <div className={prefixCls}>
      {
        list.map((e, i) => (
          <a
            className={i === index ? `${prefixCls}-active` : null}
            key={e.title}
            onClick={() => {
              scrollToAnchor(e.title);
              setIndex(i);
            }}
          >
            {e.title}
          </a>
        ))
      }
    </div>
    )
}

export default FixedNav;
