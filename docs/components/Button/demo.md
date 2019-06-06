---
imports:
  import Demo from './demo.tsx';
  import GroupDemo from './group.tsx';
  import DemoCode from '!raw-loader!./demo.tsx';
  import GroupDemoCode from '!raw-loader!./group.tsx';
---

## Button 按钮

按钮用于开始一个即时操作。响应用户点击行为，触发相应的业务逻辑。

## 使用按钮

:::demo
  <CodeBox code={DemoCode}>
    <Demo />
  </CodeBox>
:::

## 使用按钮组合

:::demo
  <CodeBox code={GroupDemoCode}>
    <GroupDemo />
  </CodeBox>
:::

## Props
| 参数     | 说明     | 类型   | 可选值 | 默认值 |
| -------- | -------- | ------ | ------ | ------ |
| type | 按钮种类 | string | `primary` / `gray` / `warn` / `link` | - |
| style | 按钮样式 | React.CSSProperties | - | - |
| size | 按钮尺寸 | string | `default` / `small` / `large` | `default` |
| disabled | 按钮是否禁用 | boolean | - | `false` |
| loading | 按钮是否加载中 | boolean | - | `false` |
| block | 将按钮宽度调整为其父宽度的选项 | boolean | - | `false` |
| htmlType | 设置 button 原生的 type 值 | string | - | `button` |
| className | 按钮类名 | string | - | - |
| icon | icon类名 | string | - | - |
| href | 点击跳转的地址 | string | - | - |
| onClick | 点击回调 | (e: React.MouseEvent) => void | - | - |
