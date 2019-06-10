---
imports:
  import Demo from './demo.tsx';
  import DemoCode from '!raw-loader!./demo.tsx';
  import FooterModalDemo from './footerModal.tsx';
  import FooterModalDemoCode from '!raw-loader!./footerModal.tsx';
  import AlertModalDemo from './alertModal.tsx';
  import AlertModalDemoCode from '!raw-loader!./alertModal.tsx';

---

## Modal 对话框

模态对话框。
需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。

## 最简单的用法

:::demo
  <CodeBox code={DemoCode}>
    <Demo />
  </CodeBox>
:::

## 自定义底部

:::demo
  <CodeBox code={FooterModalDemoCode}>
    <FooterModalDemo />
  </CodeBox>
:::

## alert 快捷调用

:::demo
  <CodeBox code={AlertModalDemoCode}>
    <AlertModalDemo />
  </CodeBox>
:::

## Modal Props
| 参数     | 说明     | 类型   | 可选值 | 默认值 |
| -------- | -------- | ------ | ------ | ------ |
| okText            | 确定按钮的文本  | ReactNode  |--| `确定`  | --   |
| cancelText        | 取消按钮的文本 | ReactNode  |--| `取消`  | --   |
| closable          | 是否显示右上角的叉号    | boolean |--|`true`  | --   |
| destroy           | 模态框关闭后是否销毁     | boolean    |--| `true`  | --   |
| onOk              | 点击确认按钮的回调    | () => void |--| `noop`  | --   |
| onCancel          | 点击取消按钮，右上角叉号，蒙层的回调 | () => void |--| `noop`  | --   |
| title             | 标题             | ReactNode  | --      | --   |
| visible           | 是否可见     | boolean |--   | `false` | --   |
| maskClosable      | 是否点击蒙层关闭模态框 | boolean| -- | `true`  | --   |
| className         | 类名    | string     | -- | --   |
| style             | 包裹层的样式         | object     | --      | --   |
| zIndex            | 设置 z 轴的优先级    | number     | --      | --   |
| footer            | 是否有底部          | ReactNode  | --      | --   |
| width             | 设置内容区的宽度      | number     | --      | --   |
| okButtonProps     | 确定按钮的 props     | object     | --      | --   |
| cancelButtonProps | 取消按钮的 props  | object     | --      | --   |
| esc               | 是都支持点击 `esc` 关闭模态框        | boolean    | --   |`true`  | --   |
| afterClose        | 模态框彻底关闭后的回到               | () => void | --   |`noop`  | --   |
| confirmLoading | ok按钮自带loading | boolean | - | `true` |

## Modal 还支持快捷调用的方式

> `Modal.confirm({})`  

> `Modal.info({})`  
  
> `Modal.success({})`  
  
> `Modal.error({})`  
  
> `Modal.warning({})` 

## alert 快捷调用 props

| 参数     | 说明     | 类型   | 可选值 | 默认值 |
| -------- | -------- | ------ | ------ | ------ |
| icon | 图标 | ReactNode | -- | 问号的按钮 |
| content | 内容区 | ReactNode | -- | --   |
| title | 标题 | ReactNode | -- | --   |

> `restProps 参考modal`

