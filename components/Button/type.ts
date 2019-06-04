import { tuple } from '../utils/type';

export const ButtonTypes = tuple('default', 'primary', 'dashed', 'danger');
export type ButtonType = (typeof ButtonTypes)[number];

export const ButtonSizes = tuple('large', 'default', 'small');
export type ButtonSize = (typeof ButtonSizes)[number];

export const ButtonHTMLTypes = tuple('submit', 'button', 'reset');
export type ButtonHTMLType = (typeof ButtonHTMLTypes)[number];

export type AnchorButtonProps = {
  href: string;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
} & IButtonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export interface IButtonProps {
  prefixCls?: string,
  disabled?: boolean,
  type?: ButtonType,
  size?: ButtonSize,
  block?: boolean,
  htmlType?: ButtonHTMLType,
  className?: string,
  style?: React.CSSProperties
  href?: string,
  onClick?: (e: React.MouseEvent) => void,
}

export interface ButtonGroupProps {
  size?: ButtonSize;
  style?: React.CSSProperties;
  className?: string;
  prefixCls?: string;
}
