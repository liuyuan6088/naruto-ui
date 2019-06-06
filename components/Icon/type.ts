
export interface IIconProps {
  type: string,
  size?: number,
  color?: string,
  spin?: boolean,
  prefixCls?: string,
  className?: string,
  style?: React.CSSProperties,
  onClick?: (e: React.MouseEvent) => void
}

export interface CustomIconOptions {
  scriptUrl?: string;
}