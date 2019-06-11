import * as React from 'react'
import { IAvatarProps } from './type'
import cx from 'classnames'
import { primaryName } from '../utils/constant'
import Icon from '../Icon'
import './style/index.less'

const { useRef, useState, useEffect } = React

const defaultProps: IAvatarProps = {
  prefixCls: `${primaryName}-avatar`,
  shape: 'circle',
  srcSet: '',
  alt: '',
  onError: () => false
}

const renderChildren = (
  { icon, children, size, src, srcSet, alt, onError, prefixCls }: IAvatarProps,
  childrenRef: React.MutableRefObject<HTMLSpanElement>,
  scale: number
) => {
  let childrenNode = children
  if (icon) {
    const sizeStyle =
      typeof size === 'number'
        ? {
            fontSize: size / 2
          }
        : {}
    childrenNode = <Icon style={{ ...sizeStyle }} type={icon} />
  } else if (src) {
    childrenNode = <img src={src} srcSet={srcSet} alt={alt} onError={onError} />
  } else if (typeof children === 'string') {
    const transformString = `scale(${scale}) translateX(-50%)`
    const childrenStyle: React.CSSProperties =
      scale === 1
        ? {}
        : {
            msTransform: transformString,
            WebkitTransform: transformString,
            transform: transformString
          }
    const classes = scale === 1 ? '' : `${prefixCls}-string`
    return (
      <span className={classes} style={{ ...childrenStyle }} ref={childrenRef}>
        {children}
      </span>
    )
  }
  return childrenNode
}

const getScale = (
  avatarRef: React.MutableRefObject<HTMLSpanElement>,
  childrenRef: React.MutableRefObject<HTMLSpanElement>
): number => {
  if (childrenRef && childrenRef.current) {
    const childrenNode = childrenRef.current
    const childrenWidth = childrenNode.offsetWidth
    // 外层盒子宽度
    const avatarWidth = avatarRef.current.getBoundingClientRect().width
    if (avatarWidth - 8 < childrenWidth) {
      return (avatarWidth - 8) / childrenWidth
    } else {
      return 1
    }
  }
  return 1
}

const onlyChild = (props: IAvatarProps) => !['icon', 'src'].some(e => e in props)

const Avatar: React.SFC<IAvatarProps> = props => {
  const { prefixCls, className, style, size, shape, src, onClick, children } = props

  const [scale, setScale] = useState<number>(1)

  const avatarRef = useRef<HTMLSpanElement>(null)
  const childrenRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (typeof children === 'string' && onlyChild(props)) {
      const newScale = getScale(avatarRef, childrenRef)
      setScale(newScale)
    }
  }, [children])

  const classes = cx(
    prefixCls,
    {
      [`${prefixCls}-${size}`]: !!size && typeof size === 'string',
      [`${prefixCls}-${shape}`]: !!shape,
      [`${prefixCls}-image`]: !!src
    },
    className
  )

  const sizeStyle =
    typeof size === 'number'
      ? {
          width: size,
          height: size,
          lineHeight: `${size}px`,
          fontSize: size / 2
        }
      : {}

  return (
    <span ref={avatarRef} onClick={onClick} className={classes} style={{ ...style, ...sizeStyle }}>
      {renderChildren(props, childrenRef, scale)}
    </span>
  )
}

Avatar.defaultProps = defaultProps

export default Avatar
