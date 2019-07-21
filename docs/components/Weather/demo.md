---
imports:
  import Demo from './demo.tsx';
  import DemoCode from '!raw-loader!./demo.tsx';

---

## Weather 天气

Weather - 天气。

## 使用Weather

:::demo
  <CodeBox code={DemoCode}>
    <Demo />
  </CodeBox>
:::

## Props
| 参数     | 说明     | 类型   | 可选值 | 默认值 |
| -------- | -------- | ------ | ------ | ------ |
| type | 类型 | string | - | - |

