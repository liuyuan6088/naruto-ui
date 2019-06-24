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
| size | 尺寸 | SizeType | - | normal |
| type | type | Type | `line` / `circle` | line |
| percent | 当前的进度 | number | - | - |
| showInfo | 是否显示进度条的数值 | boolean | - | - |
| status | 状态 | StatusType | - | - |
| width | 进度条的宽度 | number | - | - |
| activeColor | activeColor | string | - | - |
| textRender | 圆形的时候的文本渲染函数 | (percent: number) => React.ReactNode | - | - |



