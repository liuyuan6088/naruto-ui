import * as React from 'react'
import cx from 'classnames'
import omit from 'omit.js'
import Group from './ButtonGroup'
import Icon from '../Icon'
import { primaryName } from '../utils/constant'
import { IButtonProps, AnchorButtonProps } from './type'
import './style/index.less'

const defaultProps: IButtonProps = {
  prefixCls: `${primaryName}-btn`,
  type: 'default',
  block: false
}

const handleClick = ({ onClick, disabled, loading }: IButtonProps) => (e: React.MouseEvent) => {
  if (disabled) {
    return
  }
  if (loading) return
  if (onClick) {
    onClick(e)
  }
}

const renderChildren = (children: React.ReactNode) => {
  if (!(children || children === 0)) {
    return null
  }
  if (typeof children === 'string') {
    return <span>{children}</span>
  }
  return children
}

// 解决写了默认值 使用仍然需要必填的问题
const Button: React.FC<IButtonProps> & {
  defaultProps: Partial<IButtonProps>
  Group?: typeof Group
} = props => {
  const {
    prefixCls,
    disabled,
    loading,
    type,
    size,
    block,
    htmlType,
    className,
    style,
    href,
    icon,
    children,
    ...rest
  } = props

  const classes = cx(prefixCls, className, {
    [`${prefixCls}-block`]: block,
    [`${prefixCls}-loading`]: loading,
    [`${prefixCls}-${type}`]: type,
    [`${prefixCls}-${size}`]: size
  })

  const iconType = loading ? 'reload' : icon
  const iconNode = iconType ? <Icon type={iconType} spin className={`${prefixCls}-icon`} /> : null

  if (href) {
    const linkRestProps = omit(rest as AnchorButtonProps, ['htmlType'])
    const classesA = cx(`${prefixCls}-a`, className, {
      [`${prefixCls}-block`]: block,
      [`${prefixCls}-${size}`]: size
    })
    return (
      <a
        {...linkRestProps}
        href={href}
        style={style}
        className={classesA}
        onClick={handleClick(props)}
      >
        {renderChildren(children)}
      </a>
    )
  }

  return (
    <button
      type={htmlType || 'button'}
      style={style}
      className={classes}
      disabled={disabled}
      onClick={handleClick(props)}
    >
      {iconNode}
      {renderChildren(children)}
    </button>
  )
}

Button.defaultProps = defaultProps

export default Button
