import * as React from 'react'
import Portal from '../Portal'
import { IPopoverProps } from './type'
import { primaryName } from '../utils/constant'
import './style/index.less'

const defaultProps: IPopoverProps = {
  prefixCls: `${primaryName}-popover`,
  placement: 'top',
  offset: 2,
  trigger: 'hover',
  mouseEnterDelay: 0.1,
  mouseLeaveDelay: 0.1
}

const Popover: React.FC<IPopoverProps> = props => {
  const {
    prefixCls,
    visible,
    trigger,
    placement,
    offset,
    onVisibleChange,
    title,
    content: propsContent,
    children,
    ...rest
  } = props

  const content = (
    <div className={`${prefixCls}-content-inner`}>
      <div className={`${prefixCls}-content-title`}>{title}</div>
      <div className={`${prefixCls}-content-info`}>{propsContent}</div>
    </div>
  )

  return (
    <Portal
      prefixCls={prefixCls}
      visible={visible}
      content={content}
      transitionName="zoom-big"
      offset={offset}
      placement={placement}
      trigger={trigger}
      onVisibleChange={onVisibleChange}
      wrapperClassName={`${prefixCls}-wrapper`}
      hasTriangle
      {...rest}
      mode="popover"
    >
      {children}
    </Portal>
  )
}

Popover.defaultProps = defaultProps

export default Popover
