---
imports:
  import Demo from './demo.tsx';
  import DemoCode from '!raw-loader!./demo.tsx';

---

## Tag 标签

标签

## 使用Tag

:::demo
  <CodeBox code={DemoCode}>
    <Demo />
  </CodeBox>
:::

## Props
| 参数     | 说明     | 类型   | 可选值 | 默认值 |
| -------- | -------- | ------ | ------ |------ |
| className | 类名 | string | - | - |
| style | 自定义样式对象 | React.CSSProperties | - | - |

