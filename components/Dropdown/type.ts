
import { Trigger } from '../Portal/type'

export type DropdownPlacementType = 'bottomLeft'| 'bottom'| 'bottomRight'| 'topLeft'| 'top'| 'topRight'

export interface IDropdownProps {
  prefixCls?: string;
  // 菜单
  dropdown: React.ReactNode;
  // style dropDown 样式
  dropDownStyle?: React.CSSProperties
  // dropDown className
  dropDownClassName?: string
   // 弹出方向
  placement?: DropdownPlacementType;
  // 触发 dropdown 的方式
  trigger?: Trigger;
  // visible 是否可见 受控
  visible?: boolean;
  // 鼠标移入后延时多少才显示 Tooltip 单位：秒
  mouseEnterDelay?: number;
  // 鼠标移出后延时多少才隐藏 Tooltip 单位：秒
  mouseLeaveDelay?: number;
  // offset 偏移距离 默认为6
  offset?: number
  // onVisibleChange 显隐状态变化的回调
  onVisibleChange?: (visible: boolean) => void
  // disabled 是否禁用
  disabled?: boolean;
   // 动画的类名
   transitionName?: string;
   // 配置渲染节点的输出位置
   getContainer?: () => HTMLElement;
}