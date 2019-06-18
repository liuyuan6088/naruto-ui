import * as React from 'react';
import { Dropdown, Button } from 'components';
// import './index.less'

// const topList = ['topLeft', 'top', 'topRight']
// const leftList = ['leftTop', 'left', 'leftBottom']
// const bottomList = ['bottomLeft', 'bottom', 'bottomRight']
// const rightList = ['rightTop', 'right', 'rightBottom']

const Demo: React.FC = () => {

  // const [visible, setVisible] = React.useState<boolean>(false)
  const dropdown = (
    <div>
      <div>dropdown!!!!dropdown!!!!</div>
      <div>dropdown!!!!dropdown!!!!</div>
      <div>dropdown!!!!dropdown!!!!</div>
      <div>dropdown!!!!dropdown!!!!</div>
    </div>
  )
  return (
    <React.Fragment>

      <p>基本用法</p>
      <div>
        <Dropdown dropdown={dropdown}>
          <Button>基本用法</Button>
        </Dropdown>
      </div>

      <p>两种触发方式</p>
      <div className='demo-spin-1'>
        <Dropdown dropdown={dropdown} trigger='click'>
          <Button>click</Button>
        </Dropdown>

        <Dropdown dropdown={dropdown}>
          <Button>hover</Button>
        </Dropdown>
      </div>

      <p>支持 6 个弹出位置</p>
      <div className='demo-spin-1'>
        <Dropdown dropdown={dropdown} placement='topLeft'>
          <Button>topLeft</Button>
        </Dropdown>
        <Dropdown dropdown={dropdown} placement='top'>
          <Button>top</Button>
        </Dropdown>
        <Dropdown dropdown={dropdown} placement='topRight'>
          <Button>topRight</Button>
        </Dropdown>
        <Dropdown dropdown={dropdown} placement='bottomLeft'>
          <Button>bottomLeft</Button>
        </Dropdown>
        <Dropdown dropdown={dropdown} placement='bottom'>
          <Button>bottom</Button>
        </Dropdown>
        <Dropdown dropdown={dropdown} placement='bottomRight'>
          <Button>bottomRight</Button>
        </Dropdown>
      </div>

      <p>禁用</p>
      <div>
        <Dropdown dropdown={dropdown} disabled>
          <Button>bottomRight</Button>
        </Dropdown>
      </div>

    </React.Fragment>
  )
}

export default Demo;
