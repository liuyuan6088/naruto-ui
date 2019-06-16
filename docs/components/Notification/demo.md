---
imports:
  import Demo from './demo.tsx';
  import DemoCode from '!raw-loader!./demo.tsx';
---

## Notification 通知提醒框

全局展示通知提醒信息。
在系统四个角显示通知提醒信息。经常用于以下情况：

> 较为复杂的通知内容。

> 带有交互的通知，给出用户下一步的行动点。

> 系统主动推送

## 如何使用

:::demo
  <CodeBox code={DemoCode}>
    <Demo />
  </CodeBox>
:::

## 全局方法

```jsx
// 全局销毁方法
notification.destroy()
// 全局配置
notification.config({
  top: 100,
  duration: 2,
  maxCount: 3,
});
```

## API

> notification.success(config)

> notification.error(config)

> notification.info(config)

> notification.warning(config)

> notification.open(config)

> notification.close(key: String)

> notification.destroy()


## config
| 参数     | 说明   | 类型   | 可选值 | 默认值 |
| -------- | ------ | ------ | ------ | ------ |
| description | 通知提醒内容，必选 | React.ReactNode | - | - |
| message | 通知提醒标题，必选 | React.ReactNode | - | - |
| getContainer | 配置渲染节点的输出位置 | () => HTMLNode | - | - |
| btn | 自定义按钮 | React.ReactNode | - | - |
| duration | 自动关闭的延时，单位秒。设为 0 时不自动关闭 | number | - | 3 |
| onClose |  关闭时触发的回调函数 | Function | - |  |
| icon |  图标 | React.ReactNode | - |  |
| key |  当前通知唯一标志 | string | - |  |
| bottom |  消息从底部弹出时，距离底部的位置，单位像素 | number | - |  |
| top |  消息从顶部弹出时，距离顶部的位置，单位像素 | number | - |  |
| placement |  弹出位置，可选 topLeft topRight bottomLeft bottomRight | string | - | topRight |
| className | 类名 | string | - | - |
| style | 样式 | React.CSSProperties | - | - |
