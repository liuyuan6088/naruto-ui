import * as React from 'react';
import { Weather } from 'components';

const Demo: React.FC = () => {

  return (
    <React.Fragment>

      <p>基本用法</p>
      <div className='demo-spin-1'>
        <Weather type='cloudy' />
      </div>
      <div className='demo-spin-1'>
        <Weather type='sunny' />
      </div>

    </React.Fragment>
  )
}

export default Demo;
