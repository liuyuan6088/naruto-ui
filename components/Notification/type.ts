
import { Properties } from '../n-notification/type'


export type Config = Pick<Properties, 'getContainer' | 'duration' | 'bottom' | 'top' | 'placement' | 'transitionName'>

export interface NoticeRes {
  (): void;
  then?(filled: ThenableArgument, rejected?: ThenableArgument): Promise<{}>;
  promise?: Promise<{}>;
}

export interface ThenableArgument {
  (_: any): any;
}

export interface Notice extends Config {
  // 通知提醒内容，必选
  description: React.ReactNode;
  // 通知提醒标题，必选
  message: React.ReactNode;
  // 自定义图标
  icon?: React.ReactNode;
  // 自定义按钮
  btn?: React.ReactNode;
  // 类名
  className?: string;
  // 关闭时触发的回调函数
  onClose?: Function;
  // 当前通知唯一标志
  key?: string | number;
}

export interface ApiFn {
  open?: (a: Notice) => NoticeRes;
  info?: (a: Notice) => NoticeRes;
  success?: (a: Notice) => NoticeRes;
  error?: (a: Notice) => NoticeRes;
  warning?: (a: Notice) => NoticeRes;
}
