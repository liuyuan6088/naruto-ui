---
imports:
  import Demo from './demo.tsx';
  import DemoCode from '!raw-loader!./demo.tsx';

---

## Rate 评分

评分组件.

## 使用Rate

:::demo
  <CodeBox code={DemoCode}>
    <Demo />
  </CodeBox>
:::

## Props
| 参数     | 说明     | 类型   | 可选值 | 默认值 |
| -------- | -------- | ------ | ------ | ------ |
| count | 个数 | number | - | 5 |
| character | 自定义字符 | React.ReactNode | - | - |
| tooltips | 自定义每项的提示信息 | string[] | - | - |
| value | 当前数，受控值 | number | - | - |
| defaultValue | 默认值 | number | - | 0 |
| allowClear | 是否允许再次点击后清除 | boolean | - | true |
| allowHalf | 是否允许半选 | boolean | - | - |
| disabled | 只读，无法进行交互 | boolean | - | - |
| onChange | 选择时的回调 | (value: number) => void | - | - |
| className | 自定义样式类名 | string | - | - |
| wrapperClassName | 外层容器类名 | string | - | - |
| style | 自定义样式对象 | React.CSSProperties | - | - |


