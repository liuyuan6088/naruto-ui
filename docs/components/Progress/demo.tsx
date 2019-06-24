import * as React from 'react';
import { Progress, Button } from 'components';

const Demo: React.FC = () => {

  const [percent, setPercent] = React.useState<number>(10)

  return (
    <React.Fragment>

      <p>基本用法</p>
      <div>
        <Progress percent={50} />
        <Progress status='active' percent={60} />
      </div>

      <p>三个尺寸</p>
      <div>
        <Progress size='small' percent={20} />
        <Progress percent={50} />
        <Progress size='large' percent={80} />
      </div>

      <p>type circle</p>
      <div>
        <Progress type='circle' percent={50} />
      </div>

      <p>自定义颜色</p>
      <div>
        <Progress activeColor='#52c41a' percent={20} />
        <Progress activeColor='#faad14' percent={50} />
        <Progress activeColor='#1890ff' percent={80} />
      </div>

      <p>status</p>
      <div>
        <Progress status='error' percent={20} />
        <Progress status='success' percent={40} />
        <Progress status='active' percent={60} />
      </div>

      <p>button 控制</p>
      <div>
        <Progress percent={percent} />
        <Button onClick={() => setPercent(p => p <= 0 ? 100 : p - 10)}>-</Button><Button onClick={() => setPercent(p => p >= 100 ? 0 : p + 10)}>+</Button>
      </div>

    </React.Fragment>
  )
}

export default Demo;
