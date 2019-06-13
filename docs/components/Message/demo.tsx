import * as React from 'react';
import { message, Button } from 'components';

const { useEffect } = React;

message.config({
  top: 30,
  duration: 3,
  maxCount: 8,
})

const handleClick = (type: string) => () => {
  message[type]({
    content: 'test!!!!!!??????',
  })
}

const handleClick1 = () => {
  message.info({
    content: 'test!!!!!!??????',
    duration: 10,
  })
}

const handleClick2 = () => {
  message.info({
    content: 'test!!!!!!??????',
    duration: 0,
  })
}

const handleDestroy = () => {
  message.destroy();
}

const Demo: React.FC = () => {

  useEffect(() => {
    return () => {
      message.destroy();
    }
  }, [])

  return (
    <React.Fragment>

      <p>基本用法, 信息提醒反馈, 包括成功、失败、警告</p>
      <div className='button-box'>
        <Button type='dashed' onClick={handleClick('success')}>success</Button>
        <Button type='danger' onClick={handleClick('error')}>error</Button>
        <Button type='primary' onClick={handleClick('warning')}>warning</Button>
        <Button onClick={handleClick('info')}>info</Button>
      </div>

      <p>自定义时长 10s，默认时长为 3s</p>
      <div className='button-box'>
        <Button onClick={handleClick1}>duration = 10</Button>
        <Button onClick={handleClick2}>duration = 0</Button>
      </div>

      <p>提供了全局配置和全局销毁方法</p>
      <div className='button-box'>
        <Button type='primary' onClick={handleDestroy}>destroy</Button>
      </div>

    </React.Fragment>
  )
}

export default Demo;
