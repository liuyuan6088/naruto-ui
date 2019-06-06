---
imports:
  import Demo from './demo.tsx';
  import DemoCode from '!raw-loader!./demo.tsx';
  import CreateFontDemo from './createFont.tsx';
  import CreateFontDemoCode from '!raw-loader!./createFont.tsx';
---

## Icon 按钮

语义化的矢量图形。

## 基础用法

```jsx
<Icon type="loading">
```

## 自定义 font 图标

```js
const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});
```

:::demo
  <CodeBox code={DemoCode}>
    <CreateFontDemo />
  </CodeBox>
:::

## 内置图标(点击复制)

:::demo
  <CodeBox code={CreateFontDemoCode}>
    <Demo />
  </CodeBox>
:::

## Props
| 参数     | 说明   | 类型   | 可选值 | 默认值 |
| -------- | ------ | ------ | ------ | ------ |
| type | 图标名称 | string | - | - |
| size | 图标大小 | number | - | - |
| spin | 是否旋转 | boolean | - | `false` |
| color | 图标颜色 | string | - | - |
| className | 类名 | string | - | - |
| style | 样式 | React.CSSProperties | - | - |
| onClick | 点击回调 | (e: React.MouseEvent) => void | - | - |