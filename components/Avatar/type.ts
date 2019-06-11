
import { ICommonProps, tuple } from '../utils/type';

export const AvatarSizes = tuple('large', 'default', 'small');
export type AvatarSize = (typeof AvatarSizes)[number];

export const AvatarShape = tuple('circle', 'square');
export type AvatarShape = (typeof AvatarShape)[number];

export interface IAvatarProps extends ICommonProps {
  children?: React.ReactNode;
  // 设置头像的图标类型，参考 Icon 组件
  icon?: string;
  // 设置头像的大小
  size?: number | AvatarSize;
  // 指定头像的形状
  shape?: AvatarShape;
  // 图片类头像的资源地址
  src?: string;
  // 设置图片类头像响应式资源地址
  srcSet?: string;
  // 图像无法显示时的替代文本
  alt?: string;
  // 图片加载失败的事件，返回 false 会关闭组件默认的 fallback 行为
  onError?: () => boolean;
  // 点击事件
  onClick?: (e: React.MouseEvent) => void;
}