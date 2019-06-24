import { tuple } from '../utils/type';

export const SizeTypes = tuple('small', 'medium', 'large')
export type SizeType = (typeof SizeTypes)[number];

export const Types = tuple('line', 'circle')
export type Type = (typeof Types)[number];

export const StatusTypes = tuple('normal', 'success', 'error', 'active')
export type StatusType = (typeof StatusTypes)[number];

export interface IProgressProps {
  prefixCls?: string
  // 尺寸 默认为normal
  size?: SizeType
  // type 类型 默认为line
  type?: Type
  // percent 当前的进度 默认为 0
  percent?: number
  // showInfo 是否显示进度条的数值, 默认为true
  showInfo?: boolean
  // status 状态 错误的时候是红色
  status?: StatusType
  // width 进度条的宽度
  width?: number
  // activeColor
  activeColor?: string
  // 圆形的时候的文本渲染函数
  textRender?: (percent: number) => React.ReactNode
}