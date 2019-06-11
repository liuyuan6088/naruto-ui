---
imports:
  import Demo from './demo.tsx';
  import DemoCode from '!raw-loader!./demo.tsx';

---

## Avatar 头像

用来代表用户或事物，支持图片、图标或字符展示。

## 使用头像

:::demo
  <CodeBox code={DemoCode}>
    <Demo />
  </CodeBox>
:::

## Props
| 参数     | 说明     | 类型   | 可选值 | 默认值 |
| -------- | -------- | ------ | ------ | ------ |
| icon | 设置头像的图标类型 | string | - | - |
| size | 设置头像的大小 | number / `large` /  `default` / `small` | - | - |
| shape | 指定头像的形状 | string | `circle` / `square` | `circle` |
| src | 图片类头像的资源地址 | string | - | - |
| srcSet | 设置图片类头像响应式资源地址 | string | - | - |
| alt | 图像无法显示时的替代文本 | string | - | - |
| onError | 图片加载失败的事件，返回 false 会关闭组件默认的 fallback 行为 | () => boolean | - | - |
| onClick | 点击事件 | (e: React.MouseEvent) => void | - | - |

