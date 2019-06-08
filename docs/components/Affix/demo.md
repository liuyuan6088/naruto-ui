---
imports:
  import Demo from './demo.tsx';
  import DemoCode from '!raw-loader!./demo.tsx';

---

## Affix 固钉

将页面元素钉在可视范围。
当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。

## 使用固钉

:::demo
  <CodeBox code={DemoCode}>
    <Demo />
  </CodeBox>
:::

## Props
| 参数     | 说明     | 类型   | 可选值 | 默认值 |
| -------- | -------- | ------ | ------ | ------ |
| offsetTop | 距离窗口顶部达到指定偏移量后触发 | number | - | - |
| offsetBottom | 距离窗口底部达到指定偏移量后触发 | number | - | - |
| target | 	设置 `Affix` 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 | () => HTMLElement | - | - |
| onChange | 固定状态改变时触发的回调函数 | (affixed: boolean) => void | - | - |
| className | 类名 | string | - | - |
| style | 样式 | React.CSSProperties | - | - |
