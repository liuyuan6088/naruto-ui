import * as React from 'react';
import { Button } from 'components';
import './index.less';

const ButtonDemo: React.FC = () => {

  return (
    <React.Fragment>

      <p>基本按钮</p>
      <div className='button-box'>
        <Button>Default</Button>
        <Button type='primary'>Primary</Button>
        <Button type='dashed'>Dashed</Button>
        <Button type='danger'>Danger</Button>
        <Button type='link'>Link</Button>
      </div>

      <p>不同尺寸</p>
      <div className='button-box'>
        <Button type='primary' size='large'>large</Button>
        <Button type='primary'>default</Button>
        <Button type='primary' size='small'>small</Button>
      </div>

      <p>禁用</p>
      <div className='button-box'>
        <Button type='primary' disabled>disabled</Button>
      </div>
      
      <p>block</p>
      <div className='button-box'>
        <Button type='primary' block>block</Button>
      </div>

      <p>a标签</p>
      <div className='button-box'>
        <Button href='http://www.baidu.com'>link</Button>
        <Button type='link' disabled>link(disabled)</Button>
      </div>

      <p>loading</p>
      <div className='button-box'>
        <Button type='primary' loading>loading</Button>
      </div>

    </React.Fragment>
  )
}

export default ButtonDemo;
