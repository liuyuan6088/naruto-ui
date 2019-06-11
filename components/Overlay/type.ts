
export interface CSSTimer {
  enter?: number;
  exit?: number;
}

export interface MousePosition {
  x: number;
  y: number;
}

export interface IOverlayProps {
  // 是否显示
  visible?: boolean;
  // 类名前缀
  prefixCls?: string;
  // 是否展示遮罩
  hasMask?: boolean;
  // maskAnimation 弹层的动画 默认为 fade
  maskAnimation?: string;
  // maskTimeout 动画时间 自定义动画的时候需要与自定义动画的时间保持一致 默认 300ms
  maskTimeout?: number | CSSTimer;
  // 遮罩类名
  maskClassName?: string;
  // 遮罩层级
  zIndex?: number;
  // contentAnimation 内容区的动画 默认为 zoom
  contentAnimation?: string;
  // contentTimeout 动画时间 自定义动画的时候需要与自定义动画的时间保持一致 默认 300ms
  contentTimeout?: number | CSSTimer;
  // destroy 隐藏时， 是否销毁 默认为 true
  destroy?: boolean
  // 内容类名
  wrapperClassName?: string;
  // 内容样式
  wrapperStyle?: React.CSSProperties;
  // 是否点击遮罩层 关闭 默认为 true
  maskClosable?: boolean;
  // onClose 关闭弹层的回调
  onClose?: (e: React.MouseEvent) => void;
  // closable 是否显示右上角的叉号
  closable?: boolean;
  // 头部节点
  header?: React.ReactNode;
  // 尾部节点
  footer?: React.ReactNode;
  // afterClose 弹窗完全关闭后的回调
  afterClose?: () => void;
  // esc 是否支持键盘 esc 关闭 默认为 true
  esc?: boolean;
  // 鼠标点击位置
  mousePosition?: MousePosition | null;
}
