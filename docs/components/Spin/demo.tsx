import * as React from 'react';
import { Spin, Button, Icon } from 'components';
import './index.less'

const { useState } = React;

const Demo: React.FC = () => {

  const [loading, setLoading] = useState<boolean>(true)

  return (
    <React.Fragment>

      <p>基本用法, 自定义指示符</p>
      <div className='demo-spin-1'>
        <Spin size='small' />
        <Spin />
        <Spin size='large' />
        <Spin indicator={<Icon type='loading' style={{ fontSize: 24, color: 'red' }} spin />} />
      </div>

      <p>放入一个容器中, 自定义描述文案</p>
      <div className='demo-spin-2'>
        <Spin tip='loading...' />
      </div>

      <p>包裹内容, 延迟显示 loading 效果。当 spinning 状态在 delay 时间内结束，则不显示 loading 状态</p>
      <Button onClick={() => setLoading(a => !a)}>切换</Button>
      <div className='demo-spin-3'>
        <Spin tip='loading...' spinning={loading} delay={1000}>
          <div style={{ padding: 20 }}>
            <p>我是内容</p>
            <p>我是内容</p>
            <p>我是内容</p>
            <p>我是内容</p>
            <p>我是内容</p>
          </div>
        </Spin>
      </div>
    </React.Fragment>
  )
}

export default Demo;
