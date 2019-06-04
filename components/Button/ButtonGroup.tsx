import * as React from 'react'
import cx from 'classnames'
import { primaryName } from '../utils/constant'
import { ButtonGroupProps } from './type'
import './style/index.less'

const ButtonGroup: React.FC<ButtonGroupProps> = props => {
  const { prefixCls, size, className, ...rest } = props

  const classes = cx(prefixCls, className, {
    [`${prefixCls}-${size}`]: size
  })

  return <div {...rest} className={classes} />
}

ButtonGroup.defaultProps = {
  prefixCls: `${primaryName}-btn-group`
}

export default ButtonGroup
