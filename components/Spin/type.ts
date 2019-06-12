
import { ICommonProps, tuple } from '../utils/type';

export const SpinSizes = tuple('large', 'default', 'small');
export type SpinSize = (typeof SpinSizes)[number];

export interface ISpinProps extends ICommonProps {
  children?: React.ReactNode;
  // 组件大小
  size?: SpinSize;
  // 当作为包裹元素时，可以自定义描述文案
  tip?: string | React.ReactNode;
  // 是否为加载中状态
  spinning?: boolean;
  // 加载指示符
  indicator?: React.ReactNode;
  // 延迟显示加载效果的时间（防止闪烁）
  delay?: number;
}
