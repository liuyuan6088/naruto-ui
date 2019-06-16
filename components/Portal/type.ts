
import { tuple } from '../utils/type';

export const PlacementTypes = tuple('top','bottom','topLeft','topRight','bottomLeft','bottomRight','left','leftTop','leftBottom','right','rightTop','rightBottom');
export type PlacementType = (typeof PlacementTypes)[number];

export type Trigger = 'hover' | 'click'

export interface IPortalProps {

  prefixCls?: string;

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
}