
import { tuple } from '../utils/type';

export const PlacementTypes = tuple('top','bottom','topLeft','topRight','bottomLeft','bottomRight','left','leftTop','leftBottom','right','rightTop','rightBottom');
export type PlacementType = (typeof PlacementTypes)[number];

export const ModeTypes = tuple('dropdown', 'tooltip', 'popover')
export type ModeType = (typeof ModeTypes)[number];

export type Trigger = 'hover' | 'click'

export interface IPortalProps extends ICommonSubgroupProps {

  // 出现的方向
  placement?: PlacementType;
  // wrapperComponent 默认为 span
  wrapperComponent?: string | any;
  // wrapperStyle 包裹层的样式
  wrapperStyle?: React.CSSProperties;
  // wrapper 类名
  wrapperClassName?: string;
  // content dropdown 的内容区
  content?: React.ReactNode
  // 默认为 true
  autoAdjustOverflow?: boolean
  // mode 类型 dropdown 类型的时候有默认最小值
  mode?: ModeType
  // 三角标
  hasTriangle?: boolean
  // click outside close
  isClickOutSideClose?: boolean;
}

export interface ICommonSubgroupProps {
  prefixCls?: string;
  // style dropDown 样式
  dropDownStyle?: React.CSSProperties
  // dropDown className
  dropDownClassName?: string
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