import * as React from 'react';
import { Tooltip, Button } from 'components';
import './index.less'

const topList = ['topLeft', 'top', 'topRight']
const leftList = ['leftTop', 'left', 'leftBottom']
const bottomList = ['bottomLeft', 'bottom', 'bottomRight']
const rightList = ['rightTop', 'right', 'rightBottom']

const Demo: React.FC = () => {

  const [visible, setVisible] = React.useState<boolean>(false)

  return (
    <React.Fragment>

      <p>基本用法</p>
      <div className='demo-spin-1'>
        <Tooltip title='Tooltip!!!!!!!!!' onVisibleChange={bool => console.log(bool)}>
          <Button>基本用法</Button>
        </Tooltip>
      </div>

      <p>两种触发方式</p>
      <div className='demo-spin-1'>
        <Tooltip title='Tooltip!!!!!!!!!' trigger='click'>
          <Button>click</Button>
        </Tooltip>

        <Tooltip title='Tooltip!!!!!!!!!'>
          <Button>hover</Button>
        </Tooltip>
      </div>

      <p>外部visible 受控</p>
      <div>
        <Tooltip visible={visible} title='Tooltip!!!!!!!!!'>
          <Button onClick={() => setVisible(e => !e)}>受控</Button>
        </Tooltip>
      </div>

      <p>placement位置有 12 个方向</p>
      <div className='demo-tooltip-1'>
        {
          [topList, leftList, bottomList, rightList].map((e) => (
            <div key={e[1]} className={`demo-tooltip-${e[1]}`}>
              {
                e.map((ee) => (
                  <Tooltip key={ee} placement={(ee as any)} title='Tooltip!!!!!!!!!'>
                    <Button>{ee}</Button>
                  </Tooltip>
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
