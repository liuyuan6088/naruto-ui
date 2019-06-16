---
imports:
  import Demo from './demo.tsx';
  import DemoCode from '!raw-loader!./demo.tsx';

---

## Spin 加载中

用于页面和区块的加载中状态。

## 使用加载中

:::demo
  <CodeBox code={DemoCode}>
    <Demo />
  </CodeBox>
:::

## 静态方法

```js
// Spin.setDefaultIndicator(indicator: ReactElement)
// 同上 indicator，你可以自定义全局默认元素
Spin.setDefaultIndicator(
  <Icon type='loading' style={{ color: 'red' }} spin />
)
```

## Props
| 参数     | 说明     | 类型   | 可选值 | 默认值 |
| -------- | -------- | ------ | ------ | ------ |
| tip | 当作为包裹元素时，可以自定义描述文案 | string / React.ReactNode | - | - |
| size | 组件大小 | string / `large` /  `default` / `small` | - |
| spinning | 是否为加载中状态 | boolean | - | true |
| indicator | 加载指示符 | React.ReactNode | - | - |
| delay | 延迟显示加载效果的时间（防止闪烁） | number | - | - |
| className | 类名 | string | - | - |
| style | 样式 | React.CSSProperties | - | - |

