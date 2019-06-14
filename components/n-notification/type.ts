
export interface Notices extends Params {
  key: number | string;
}

export interface InitRes {
  add: (params: Params) => AddRes;
  destroy: () => void;
}

export interface AddRes {
  close: () => void;
}

export interface Params {
  // 提示内容
  content: React.ReactNode;
  // 自动关闭的延时，单位秒。设为 0 时不自动关闭。
  duration?: number;
  // 关闭时触发的回调函数
  onClose?: Function;
  // 图标
  icon?: React.ReactNode;
}

export interface Properties {
  // 配置渲染节点的输出位置
  getContainer?: () => HTMLElement;
  // 默认自动关闭延时，单位秒
  duration?: number;
  // 消息距离顶部的位置 24
  top?: number;
  // 最大显示数, 超过限制时，最早的消息会被自动关闭
  maxCount?: number;
  // 类名
  prefixCls?: string;
  // 动画类名
  transitionName?: string;
  // 关闭图标
  closeIcon?: React.ReactNode;
}

export interface INotificationProps extends Properties {
  // 类名前缀
  prefixCls?: string;
  // 类名
  className?: string;
  // 样式
  style?: React.CSSProperties;
  transitionName?: string;
  notices?: Notices[];
  deleteNotice?: (key: any) => void;
  // 关闭图标
  closeIcon?: React.ReactNode;
}

export interface INoticesProps extends Properties {
  // 类名前缀
  prefixCls?: string;
  // 类名
  className?: string;
  // 样式
  style?: React.CSSProperties;
  // 是否显示关闭按钮
  closable?: boolean;
  closeIcon?: React.ReactNode;
  // 自动关闭
  autoClose?: () => void;
  // 关闭的回调
  onClose?: Function;
  // 图标
  icon?: React.ReactNode;
}