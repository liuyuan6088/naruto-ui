
import { ICommonProps } from '../utils/type';

export interface IBackTopProps extends ICommonProps {
  // 滚动高度达到此参数值才出现 BackTop  默认400
  visibilityHeight?: number;
  // 设置需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数
  target?: () => (HTMLElement | Window);
  // 点击按钮的回调函数
  onClick?: (e: React.MouseEvent) => void;
}