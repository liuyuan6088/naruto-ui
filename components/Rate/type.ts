export interface IRateProps {
  prefixCls?: string
  // 外层容器类名
  wrapperClassName?: string
  // 自定义样式类名
  className?: string
  // 自定义样式对象
  style?: React.CSSProperties
  // 个数
  count?: number
  // 自定义字符
  character?: React.ReactNode
  // 自定义每项的提示信息
  tooltips?: string[]
  // 当前数，受控值
  value?: number
  // 默认值 0
  defaultValue?: number
  // 是否允许再次点击后清除 true
  allowClear?: boolean
  // 是否允许半选 false
  allowHalf?: boolean
  // 只读，无法进行交互 false
  disabled?: boolean
  // 选择时的回调
  onChange?: (value: number) => void
  // 鼠标经过时数值变化的回调
  onHoverChange?: (value: number) => void
  // 高亮颜色
  activeColor?: string
  // 置灰颜色
  disabledColor?: string 
}
