
import { IButtonProps } from '../Button/type';
import { ICommonProps, Omit } from '../utils/type';
// import { CSSTimer } from '../Overlay/type';

export interface IModalProps extends ICommonProps {

  visible?: boolean;
  title?: string | React.ReactNode;

  // 取消文本 默认为 `取消`
  cancelText?: string | React.ReactNode;
  // okText 确认文本 默认为 `确定`
  okText?: string | React.ReactNode;
  // onOk 点击确定的回调
  onOk?: () => void;
  // onCancel 点击取消或遮罩层或者右上角按钮的回调
  onCancel?: () => void;
  // okButtonProps
  okButtonProps?: IButtonProps;
  // 取消按钮的 props
  cancelButtonProps?: IButtonProps;
  // footer 底部 当不需要时设置 null
  footer?: React.ReactNode | null;

  // closable 是否显示右上角的叉号 默认 `true`
  closable?: boolean;
  // destroy 隐藏时， 是否销毁 默认为 true
  destroy?: boolean;
  // esc 是否支持键盘 esc 关闭 默认为 true
  esc?: boolean;
  // maskClosable 点击蒙层是否关闭弹窗 默认为 `true`
  maskClosable?: boolean;
  // zIndex 设置 modal 的 z-index
  zIndex?: number;
  // width 可主动设置内容区的宽度
  width?: number;
  // afterClose 弹窗完全关闭的回调
  afterClose?: () => void;
  // center 是否居中显示 modal 默认为 false
  center?: boolean;
  // 确定按钮 loading
  confirmLoading?: boolean;
  // 居中
  centered?: boolean;
}

export interface IAlertProps
  extends Omit<IModalProps, 'visible' | 'footer' | 'closable' | 'destroy'> {
  /** icon 类型 可自定义 默认与 快捷弹窗的名称一致 */
  icon?: React.ReactNode
  /** content 内容 */
  content?: string | React.ReactNode
  /** hasCancelBtn 是否需要取消按钮 默认为 true */
  hasCancelBtn?: boolean
}