
export interface IAffixProps {
  // 距离窗口顶部达到指定偏移量后触发
  offsetTop?: number
  // 距离窗口底部达到指定偏移量后触发
  offsetBottom?: number
  // 容器
  target?: () => HTMLElement
  // 固定状态改变时触发的回调函数
  onChange?: (affixed: boolean) => void
  // 类名
  className?: string
  // 样式
  style?: React.CSSProperties
}