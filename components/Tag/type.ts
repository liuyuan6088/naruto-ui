import { ICommonProps } from '../utils/type'

export interface ITagProps extends ICommonProps {
  wrapperStyle?: React.CSSProperties
  onClick?: (e: React.MouseEvent) => void
  color?: string
}