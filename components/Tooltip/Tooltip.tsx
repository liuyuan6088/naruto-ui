import * as React from 'react'
import Portal from '../Portal'
import { ITooltipProps } from './type'
import { primaryName } from '../utils/constant'
import cx from 'classnames'
import './style/index.less'

const defaultProps: ITooltipProps = {
  prefixCls: `${primaryName}-tooltip`,
  placement: 'top',
  offset: 0,
  trigger: 'hover',
  title: '',
  mouseEnterDelay: 0.1,
  mouseLeaveDelay: 0.1
}

const Tooltip: React.FC<ITooltipProps> = props => {
  const {
    prefixCls,
    visible,
    trigger,
    placement,
    offset,
    onVisibleChange,
    title,
    children,
    ...rest
  } = props

  const classes = cx({
    [`${prefixCls}-${placement}`]: placement
  })

  const content = <div className={`${prefixCls}-content-inner`}>{title}</div>

  return (
    <Portal
      dropDownClassName={classes}
      prefixCls={prefixCls}
      visible={visible}
      content={content}
      transitionName="zoom-big-fast"
      offset={offset}
      placement={placement}
      trigger={trigger}
      onVisibleChange={onVisibleChange}
      wrapperStyle={{ display: 'inline-block' }}
      hasTriangle
      {...rest}
    >
      {children}
    </Portal>
  )
}

Tooltip.defaultProps = defaultProps

export default Tooltip
