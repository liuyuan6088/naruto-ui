
import { tuple } from '../utils/type';

export const PlacementTypes = tuple('top','bottom','topLeft','topRight','bottomLeft','bottomRight','left','leftTop','leftBottom','right','rightTop','rightBottom');
export type PlacementType = (typeof PlacementTypes)[number];

export const ModeTypes = tuple('dropdown', 'tooltip', 'popover')
export type ModeType = (typeof ModeTypes)[number];

export type Trigger = 'hover' | 'click'

export interface IPortalProps {

  prefixCls?: string;
  // onVisibleChange 显隐状态变化的回调
  onVisibleChange?: (visible: boolean) => void
  // 出现的方向
  placement?: PlacementType;
  // 触发 dropdown 的方式
  trigger?: Trigger;
  // wrapperComponent 默认为 span
  wrapperComponent?: string | any;
  // wrapperStyle 包裹层的样式
  wrapperStyle?: React.CSSProperties;
  // disabled 是否禁用
  disabled?: boolean;
  // visible 是否可见
  visible?: boolean;
  // 动画的类名
  transitionName?: string;
  // style dropDown 样式
  dropDownStyle?: React.CSSProperties
  // dropDown className
  dropDownClassName?: string
  // content dropdown 的内容区
  content?: React.ReactNode
  // 配置渲染节点的输出位置
  getContainer?: () => HTMLElement;
  // 默认为 true
  autoAdjustOverflow?: boolean
  // offset 偏移距离 默认为0
  offset?: number
  // mode 类型 dropdown 类型的时候有默认最小值
  mode?: ModeType
  // 鼠标移入后延时多少才显示 Tooltip 单位：秒
  mouseEnterDelay?: number;
  // 鼠标移出后延时多少才隐藏 Tooltip 单位：秒
  mouseLeaveDelay?: number;
  // 三角标
  hasTriangle?: boolean
  // click outside close
  isClickOutSideClose?: boolean;
}