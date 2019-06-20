import * as React from 'react';
import { Rate } from 'components';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const Demo: React.FC = () => {

  const [active, setActive] = React.useState<number>(2);

  const handleClick = (index: number) => {
    setActive(index);
    // console.log(index)
  }

  return (
    <React.Fragment>

      <p>基本用法</p>
      <div className='demo-spin-1'>
        <Rate />
      </div>

      <p>受控</p>
      <div className='demo-spin-1'>
        <Rate value={active} onChange={handleClick} />
      </div>

      <p>支持选中半星</p>
      <div className='demo-spin-1'>
        <Rate allowHalf defaultValue={2.5} onChange={(a) => console.log(a)} />
      </div>

      <p>支持其他字符</p>
      <div>
        <Rate allowHalf defaultValue={2.5} character={'火'} />
        <Rate allowHalf defaultValue={2.5} character={'影'} />
      </div>

      <p>给评分组件加上文案展示</p>
      <div className='demo-spin-1'>
        <Rate tooltips={desc} />
      </div>

      <p>支持允许或者禁用清除</p>
      <div>
        <div className='demo-spin-1'>
          <Rate /><span style={{ marginLeft: 30 }}>allowClear: true</span>
        </div>
        <div className='demo-spin-1'>
          <Rate allowClear={false} /><span style={{ marginLeft: 30 }}>allowClear: false</span>
        </div>
      </div>

      <p>禁用</p>
      <div className='demo-spin-1'>
        <Rate defaultValue={2} disabled />
      </div>

    </React.Fragment>
  )
}

export default Demo;
