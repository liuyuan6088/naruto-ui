import * as React from 'react';
import { Modal, Button } from 'components';
// import './index.less';

const { useState } = React;

const Demo: React.FC = () => {

  const [visible1, setVisible1] = useState<boolean>(false);
  const [visible2, setVisible2] = useState<boolean>(false);

  return (
    <React.Fragment>
      <p>最简单的用法</p>
      <div className='demo-modal'>
        <Button onClick={() => setVisible1(true)}>点击</Button>
        <Modal
          visible={visible1}
          title='modal title'
          onCancel={() => {
            setVisible1(false)
          }}
        >
          modal content
        </Modal>
      </div>

      <p>点击遮罩层不消失</p>
      <div className='demo-modal'>
        <Button onClick={() => setVisible2(true)}>点击</Button>
        <Modal
          visible={visible2}
          title='modal title'
          maskClosable={false}
          onCancel={() => {
            setVisible2(false)
          }}
        >
          modal content
        </Modal>
      </div>
    </React.Fragment>
  )
}

export default Demo;
