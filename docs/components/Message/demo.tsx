import * as React from 'react';
import { message, Button } from 'components';

const { useEffect } = React;
const sleep = (time: number) => new Promise(function(resolve) {
  setTimeout(resolve, time)
})

message.config({
  top: 30,
  duration: 3,
  maxCount: 8,
})

const handleClick = (type: string) => () => {
  message[type]({
    content: `test!!${type}`,
    onClose: () => console.log('close')
  })
}

const handleClick1 = () => {
  message.info({
    content: 'test!!??????',
    duration: 10,
  })
}

const handleClick2 = () => {
  message.info({
    content: 'test!!!!!!??????',
    duration: 0,
  })
}

const handleClick3 = async() => {
  const close = message.loading({
    content: 'test!!!!!!??????',
    duration: 0,
    onClose: () => console.log('close')
  })
  await sleep(20000)
  close()
}

const handleClick4 = () => {
  
  message.loading({
    content: 'loading!!!!!!??????',
    duration: 2,
    onClose: () => console.log('loading')
  })
  .then(() => {
    return message.success({
      content: 'success!!!!!!??????',
      duration: 3,
      onClose: () => console.log('success')
    })
  })
  .then(() => {
    return message.info({
      content: 'info!!!!!!??????',
      duration: 3,
      onClose: () => console.log('info')
    })
  })
  .then(() => {
    return message.error({
      content: 'error!!!!!!??????',
      duration: 3,
      onClose: () => console.log('error')
    })
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

      <p>进行全局 loading，异步自行移除, 使用返回的close方法</p>
      <div className='button-box'>
        <Button onClick={handleClick3}>loading</Button>
      </div>

      <p>Promise 接口，可以通过 then 接口在关闭后运行 callback 。以上用例将在每个 message 将要结束时通过 then 显示新的 message </p>
      <div className='button-box'>
        <Button onClick={handleClick4}>promise</Button>
      </div>

      <p>提供了全局配置和全局销毁方法</p>
      <div className='button-box'>
        <Button type='primary' onClick={handleDestroy}>destroy</Button>
      </div>

    </React.Fragment>
  )
}

export default Demo;
