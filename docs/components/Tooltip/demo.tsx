import * as React from 'react';
import { Tooltip } from 'components';


const Demo: React.FC = () => {

  return (
    <React.Fragment>

      <p>基本用法, 自定义指示符</p>
      <div className='demo-spin-1'>
        <Tooltip />
      </div>

    </React.Fragment>
  )
}

export default Demo;
