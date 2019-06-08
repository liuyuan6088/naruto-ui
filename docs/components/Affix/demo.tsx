import * as React from 'react';
import { Affix } from 'components';
import { Button } from 'components';
import './index.less';

const top = 100;
const bottom = 100;
const { useRef } = React;

const Demo: React.FC = () => {

  const container1 = useRef(null);
  const container2 = useRef(null);

  return (
    <React.Fragment>

      <p className='demo-title'>基本用法</p>
      <div className='demo-box'>
        <Affix
          offsetTop={top}
        >
          <Button
            type="primary"
          >
            Affix Top
          </Button>
        </Affix>
        <Affix
          offsetBottom={bottom}
        >
          <Button
            type="primary"
          >
            Affix Bottom
          </Button>
        </Affix>
      </div>

      <p className='demo-title'>固定状态改变的回调</p>
      <div className='demo-box'>
        <Affix
          offsetTop={150}
          onChange={affixed => console.log(affixed)}
        >
          <Button
          >
            150px to affix top
          </Button>
        </Affix>
      </div>

      <p className='demo-title'>滚动容器</p>
      <div className='demo-desc'>用 target 设置 Affix 需要监听其滚动事件的元素，默认为 window</div>
      <div className='demo-box'>
        <div className="scrollable-container" ref={container1}>
          <div className="background1">
            <Affix target={() => container1.current} offsetTop={0}>
              <Button type="primary">
                Fixed at the top of container
              </Button>
            </Affix>
          </div>
        </div>
        <div className="scrollable-container" ref={container2} style={{ marginTop: 20 }}>
          <div className="background2">
            <Affix target={() => container2.current} offsetBottom={0}>
              <Button type="primary">
                Fixed at the Bottom of container
              </Button>
            </Affix>
          </div>
        </div>
      </div>

    </React.Fragment>
  )
}

export default Demo;
