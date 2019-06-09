---
imports:
  import Demo from './demo.tsx';
  import DemoCode from '!raw-loader!./demo.tsx';

---

## Breadcrumb 面包屑

显示当前页面在系统层级结构中的位置，并能向上返回。

## 使用面包屑

:::demo
  <CodeBox code={DemoCode}>
    <Demo />
  </CodeBox>
:::

## Breadcrumb Props
| 参数     | 说明     | 类型   | 可选值 | 默认值 |
| -------- | -------- | ------ | ------ | ------ |
| separator | 分隔符自定义 | `string` / `React.ReactNode` | - | `/` |
| params | 路由的参数 | object | - | - |
| routes | router 的路由栈信息 | Route[] | - | - |
| itemRender | 自定义链接函数 | (route,params,routes,path) => React.ReactNode | - | - |
| className | 类名 | string | - | - |
| style | 样式 | React.CSSProperties | - | - |

## Breadcrumb.Item Props
| 参数     | 说明     | 类型   | 可选值 | 默认值 |
| -------- | -------- | ------ | ------ | ------ |
| separator | 分隔符自定义 | `string` / `React.ReactNode` | - | `/` |
| href | 链接的目的地 | string | - | - |
| onClick | 单击事件 | (e: any)=>void | - | - |

