---
imports:
  import Demo from './demo.tsx';
  import DemoCode from '!raw-loader!./demo.tsx';
---

## Message 全局提示

全局展示操作反馈信息

## 如何使用

:::demo
  <CodeBox code={DemoCode}>
    <Demo />
  </CodeBox>
:::

## 全局方法

```jsx
// 全局销毁方法
message.destroy()
// 全局配置
message.config({
  top: 100,
  duration: 2,
  maxCount: 3,
});
```


## Props
| 参数     | 说明   | 类型   | 可选值 | 默认值 |
| -------- | ------ | ------ | ------ | ------ |
| content | 提示内容 | React.ReactNode | - | - |
| duration | 自动关闭的延时，单位秒。设为 0 时不自动关闭 | number | - | 3 |
| onClose |  关闭时触发的回调函数 | Function | - |  |
| icon |  图标 | React.ReactNode | - |  |
