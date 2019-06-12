---
imports:
  import Demo from './demo.tsx';
  import DemoCode from '!raw-loader!./demo.tsx';

---

## BackTop 回到顶部

用来代表用户或事物，支持图片、图标或字符展示。

## 使用BackTop

:::demo
  <CodeBox code={DemoCode}>
    <Demo />
  </CodeBox>
:::

## Props
| 参数     | 说明     | 类型   | 可选值 | 默认值 |
| -------- | -------- | ------ | ------ | ------ |
| visibilityHeight | 滚动高度达到此参数值才出现 | number | - | 400 |
| target | 设置需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 | () => (HTMLElement/Window) | - | () => (window) |
| onClick | 点击按钮的回调函数 | (e: React.MouseEvent) => void | - | - |



