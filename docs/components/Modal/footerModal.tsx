import * as React from 'react';
import { Modal, Button } from 'components';
// import './index.less';

const sleep = (time: number) => new Promise(function(resolve) {
  setTimeout(resolve, time)
})

const { useState } = React;

const Demo: React.FC = () => {

  const [visible1, setVisible1] = useState<boolean>(false);
  const [loading1, setLoading1] = useState<boolean>(false);

  const [visible2, setVisible2] = useState<boolean>(false);
  const [loading2, setLoading2] = useState<boolean>(false);

  return (
    <React.Fragment>
      <p>自定义底部</p>
      <div className='demo-modal'>
        <Button onClick={() => setVisible1(true)}>自定义底部</Button>
        <Modal
          visible={visible1}
          onCancel={() => setVisible1(false)}
          title="基础 Modal "
          onOk={() => setVisible1(false)}
          footer={
            <>
              <Button onClick={() => setVisible1(false)}>
                返回
              </Button>
              <Button
                type='primary'
                onClick={async() => {
                  setLoading1(true);
                  await sleep(2000)
                  setLoading1(false)
                  setVisible1(false)
                }}
                loading={loading1}
              >
                确认
              </Button>
            </>
          }
        >
          <div>自定义底部</div>
        </Modal>
      </div>

      <p>自带的loading, 可用于异步请求</p>
      <div className='demo-modal'>
        <Button type='primary' onClick={() => setVisible2(true)}>自带的loading</Button>
        <Modal
          visible={visible2}
          onCancel={() => setVisible2(false)}
          title="基础 Modal "
          onOk={async() => {
            setLoading2(true);
            await sleep(2000)
            setLoading2(false)
            setVisible2(false)
          }}
          confirmLoading={loading2}
        >
          <div>自带的loading</div>
        </Modal>
      </div>
    </React.Fragment>
  )
}

export default Demo;
