import * as React from 'react';
import { Popover, Button } from 'components';

const topList = ['topLeft', 'top', 'topRight']
const leftList = ['leftTop', 'left', 'leftBottom']
const bottomList = ['bottomLeft', 'bottom', 'bottomRight']
const rightList = ['rightTop', 'right', 'rightBottom']

const Demo: React.FC = () => {

  const content = (
    <div>
      <div>content!!!!content!!!!</div>
      <div>content!!!!content!!!!</div>
      <div>content!!!!content!!!!</div>
      <div>content!!!!content!!!!</div>
    </div>
  )

  return (
    <React.Fragment>

      <p>基本用法</p>
      <div className='demo-spin-1'>
        <Popover title='标题' content={content}>
          <Button>基本用法</Button>
        </Popover>
      </div>

      <p>两种触发方式</p>
      <div className='demo-spin-1'>
        <Popover title='标题' content={content} trigger='click'>
          <Button>click</Button>
        </Popover>

        <Popover title='标题' content={content}>
          <Button>hover</Button>
        </Popover>
      </div>

      <p>placement位置有 12 个方向</p>
      <div className='demo-tooltip-1'>
        {
          [topList, leftList, bottomList, rightList].map((e) => (
            <div key={e[1]} className={`demo-tooltip-${e[1]}`}>
              {
                e.map((ee) => (
                  <Popover key={ee} placement={(ee as any)} title='标题' content={content}>
                    <Button>{ee}</Button>
                  </Popover>
                ))
              }
            </div>
          ))
        }
      </div>

    </React.Fragment>
  )
}

export default Demo;
