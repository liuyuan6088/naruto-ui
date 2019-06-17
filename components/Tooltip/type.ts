
import { PlacementType, Trigger } from '../Portal/type'

export interface ITooltipProps {
  prefixCls?: string;
  // style dropDown 样式
  dropDownStyle?: React.CSSProperties
  // dropDown className
  dropDownClassName?: string
  // 提示文字
  title: React.ReactNode;
  // 弹出方向
  placement?: PlacementType;
  // offset 偏移距离 默认为6
  offset?: number
  // onVisibleChange 显隐状态变化的回调
  onVisibleChange?: (visible: boolean) => void
  // visible 是否可见 受控
  visible?: boolean;
  // 触发 dropdown 的方式
  trigger?: Trigger;
  // 鼠标移入后延时多少才显示 Tooltip 单位：秒
  mouseEnterDelay?: number;
  // 鼠标移出后延时多少才隐藏 Tooltip 单位：秒
  mouseLeaveDelay?: number;
  // 动画的类名
  transitionName?: string;
}