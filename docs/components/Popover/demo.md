---
imports:
  import Demo from './demo.tsx';
  import DemoCode from '!raw-loader!./demo.tsx';

---

## Popover 气泡卡片

点击/鼠标移入元素，弹出气泡式的卡片浮层。

## 使用Popover

:::demo
  <CodeBox code={DemoCode}>
    <Demo />
  </CodeBox>
:::

## Props
| 参数     | 说明     | 类型   | 可选值 | 默认值 |
| -------- | -------- | ------ | ------ | ------ |
| title | 标题 | string / React.ReactNode | - | - |
| content | 内容 | string / React.ReactNode | - | - |
| placement | 弹出方向 | PlacementType | - | top |
| offset | 偏移距离 | number | - | - |
| onVisibleChange | 显隐状态变化的回调 | (visible: boolean) => void | - | - |
| visible | 是否可见 受控 | boolean | - | - |
| trigger | 触发 dropdown 的方式 | Trigger | - | hover |
| mouseEnterDelay | 鼠标移入后延时多少才显示 Tooltip 单位：秒 | number | - | - |
| mouseLeaveDelay | 鼠标移出后延时多少才隐藏 Tooltip 单位：秒 | number | - | - |
| dropDownStyle | dropDown 样式 | React.CSSProperties | - | - |
| dropDownClassName | dropDown 类名 | string | - | - |

