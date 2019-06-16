import * as React from 'react'
import { primaryName } from '../utils/constant'
import cx from 'classnames'
import Icon from '../Icon'
import { INoticesProps } from './type'
import './style/index.less'

const { useEffect } = React

const defaultProps: INoticesProps = {
  prefixCls: `${primaryName}-notice`
}

const handleClose = (props: INoticesProps) => () => {
  const { onClose, autoClose } = props
  if (autoClose) {
    autoClose()
  }
  if (onClose) {
    onClose()
  }
}

const renderChildren = (children: React.ReactNode) => {
  if (typeof children === 'string') {
    return <span>{children}</span>
  }
  if (children) {
    return children
  }
  return null
}

const Notices: React.FC<INoticesProps> = props => {
  const {
    closable,
    autoClose,
    onClose,
    closeIcon,
    icon,
    prefixCls,
    duration,
    style,
    className,
    children
  } = props

  useEffect(() => {
    let timer = null
    if (autoClose && duration !== 0) {
      timer = setTimeout(() => {
        autoClose()
        if (onClose) {
          onClose()
        }
        clearTimeout(timer)
      }, duration * 1000)
    }
    return () => {
      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [duration])

  const classes = cx(prefixCls, `${primaryName}-notice`, className)

  const showClose = closable

  return (
    <div className={classes} style={style}>
      {icon ? <span className={`${primaryName}-notice-icon`}>{icon}</span> : null}
      {renderChildren(children)}
      {showClose && (
        <a tabIndex={0} onClick={handleClose(props)} className={`${primaryName}-close`}>
          {closeIcon || <Icon className={`${primaryName}-close-x`} type="close" />}
        </a>
      )}
    </div>
  )
}

Notices.defaultProps = defaultProps

export default Notices
