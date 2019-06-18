import * as React from 'react'
import Portal from '../Portal'
import { IDropdownProps } from './type'
import { primaryName } from '../utils/constant'
import './style/index.less'

const defaultProps: IDropdownProps = {
  prefixCls: `${primaryName}-dropdown`,
  placement: 'bottomLeft',
  dropdown: '',
  offset: 0,
  trigger: 'hover',
  mouseEnterDelay: 0.1,
  mouseLeaveDelay: 0.1,
  transitionName: ''
}

const Dropdown: React.FC<IDropdownProps> = props => {
  const {
    prefixCls,
    dropdown,
    placement,
    visible,
    transitionName,
    offset,
    onVisibleChange,
    trigger,
    children,
    ...rest
  } = props

  const getTransitionName = React.useCallback(() => {
    if (transitionName) {
      return transitionName
    }
    if (placement.indexOf('top') > -1) {
      return 'slide-down'
    }
    return 'slide-up'
  }, [transitionName, placement])

  const content = <div className={`${prefixCls}-content-inner`}>{dropdown}</div>

  return (
    <Portal
      prefixCls={prefixCls}
      visible={visible}
      content={content}
      transitionName={getTransitionName()}
      offset={offset}
      placement={placement}
      trigger={trigger}
      onVisibleChange={onVisibleChange}
      wrapperClassName={`${prefixCls}-wrapper`}
      {...rest}
      mode="dropdown"
    >
      {children}
    </Portal>
  )
}

Dropdown.defaultProps = defaultProps

export default Dropdown
