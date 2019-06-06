import * as React from 'react';
import { Icon } from 'components';
import './index.less';

const scriptUrl = '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js';
const MyIcon = Icon.createFromIconfontCN({
  scriptUrl
});

const typeList: string[] = ['icon-tuichu', 'icon-facebook', 'icon-twitter'];

const IconDemo: React.FC = () => {

  return (
    <div className='icon-demo'>
      <ul>
        {
          typeList.map(e => (
            <li key={e}>
              <div className='icon-demo-icon'>
                <MyIcon type={e} />
              </div>
              <div className='icon-demo-name'>{e}</div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default IconDemo;