import * as React from 'react';
import { notification, Button, Icon } from 'components';

notification.config({
  duration: 2,
  placement: 'topRight'
})

const sleep = (time: number) => new Promise(function(resolve) {
  setTimeout(resolve, time)
})

const handleClick = (type: string) => () => {
  notification[type]({
    message: 'title!!!!!!',
    description: 'description!!!description!!!description!!!description!!!description!!!description!!!description!!!description!!!description!!!',
    onClose: () => console.log(type)
  })
}

const handleClick1 = () => {
  notification.open({
    icon: <Icon type='user' />,
    message: 'title!!!!!!',
    description: 'description!!!description!!!description!!!description!!!description!!!description!!!description!!!description!!!description!!!'
  })
}

const handleClick2 = (placement: any) => () => {
  notification.open({
    placement,
    message: 'title!!!!!!',
    description: 'description!!!description!!!description!!!description!!!description!!!description!!!description!!!description!!!description!!!'
  })
}

const handleClick3 = async() => {
  const close = notification.open({
    message: 'title!!!!!!',
    description: 'description!!!description!!!description!!!description!!!description!!!description!!!description!!!description!!!description!!!',
    duration: 0,
    icon: <Icon type='loading' spin />,
    onClose: () => console.log('close')
  })
  await sleep(2000)
  close()
}

const handleClick4 = () => {
  
  notification.open({
    message: 'title!!!!!!',
    description: 'description!!!description!!!description!!!description!!!description!!!description!!!description!!!description!!!description!!!',
    duration: 2,
    onClose: () => console.log('loading')
  })
  .then(() => {
    return notification.success({
      message: 'title!!!!!!',
      description: 'description!!!description!!!description!!!description!!!description!!!description!!!description!!!description!!!description!!!',
      duration: 3,
      onClose: () => console.log('success')
    })
  })
  .then(() => {
    return notification.info({
      message: 'title!!!!!!',
      description: 'description!!!description!!!description!!!description!!!description!!!description!!!description!!!description!!!description!!!',
      duration: 3,
      onClose: () => console.log('info')
    })
  })
  .then(() => {
    return notification.error({
      message: 'title!!!!!!',
      description: 'description!!!description!!!description!!!description!!!description!!!description!!!description!!!description!!!description!!!',
      duration: 3,
      onClose: () => console.log('error')
    })
  })
}

const handleClick5 = async () => {
  notification.open({
    key: 'simple',
    duration: 0,
    message: 'title!!!!!!',
    description: 'description!!!description!!!description!!!description!!!description!!!description!!!description!!!description!!!description!!!',
  })
  await sleep(2000)
  notification.open({
    key: 'simple',
    message: 'change',
    description: 'change',
  })
}

const handleClick6 = () => {
  const btn = (
    <Button type="primary" size="small" onClick={() => notification.close('button')}>
      取消
    </Button>
  );
  notification.open({
    key: 'button',
    duration: 0,
    btn,
    message: 'title!!!!!!',
    description: 'description!!!description!!!description!!!description!!!description!!!description!!!description!!!description!!!description!!!',
  })
}

const handleDestroy = () => {
  notification.destroy()
}


const Demo: React.FC = () => {

  return (
    <React.Fragment>

      <p>基本用法, 信息提醒反馈, 包括成功、失败、警告</p>
      <div className='button-box'>
        <Button type='dashed' onClick={handleClick('open')}>open</Button>
        <Button type='dashed' onClick={handleClick('success')}>success</Button>
        <Button type='danger' onClick={handleClick('error')}>error</Button>
        <Button type='primary' onClick={handleClick('warning')}>warning</Button>
        <Button onClick={handleClick('info')}>info</Button>
      </div>

      <p>自定义图标</p>
      <div className='button-box'>
        <Button type='primary' onClick={handleClick1}>icon</Button>
      </div>

      <p>可选择4个不同的方向</p>
      <div className='button-box'>
        <Button type='primary' onClick={handleClick2('topLeft')}>topLeft</Button>
        <Button type='primary' onClick={handleClick2('topRight')}>topRight</Button>
        <Button type='primary' onClick={handleClick2('bottomLeft')}>bottomLeft</Button>
        <Button type='primary' onClick={handleClick2('bottomRight')}>bottomRight</Button>
      </div>

      <p>异步自行移除, 使用返回的close方法</p>
      <div className='button-box'>
        <Button onClick={handleClick3}>loading</Button>
      </div>

      <p>Promise 接口，可以通过 then 接口在关闭后运行 callback 。以上用例将在每个 notification 将要结束时通过 then 显示新的 notification </p>
      <div className='button-box'>
        <Button onClick={handleClick4}>promise</Button>
      </div>

      <p>可以通过唯一的 key 来更新内容</p>
      <div className='button-box'>
        <Button onClick={handleClick5}>simple key</Button>
      </div>

      <p>自定义关闭按钮的样式和文字</p>
      <div className='button-box'>
        <Button onClick={handleClick6}>button</Button>
      </div>

      <p>提供了全局配置和全局销毁方法</p>
      <div className='button-box'>
        <Button type='primary' onClick={handleDestroy}>destroy</Button>
      </div>


    </React.Fragment>
  )
}

export default Demo;
