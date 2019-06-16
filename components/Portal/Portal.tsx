import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { primaryName } from '../utils/constant'
import Animate from 'rc-animate'
import { IPortalProps } from './type'
import cx from 'classnames'

const { useState, useRef, useEffect } = React

const defaultProps: IPortalProps = {
  prefixCls: `${primaryName}-dropdown`,
  placement: 'top',
  trigger: 'hover',
  wrapperComponent: 'span',
  transitionName: 'fade',
  wrapperStyle: {},
  dropDownStyle: {},
  disabled: false,
  visible: false
}

const toggle = (
  { disabled, trigger, visible }: IPortalProps,
  triggerStr: string,
  toggle: boolean
) => {
  if (disabled) return
  if (trigger === triggerStr) {
    // 只在变化的时候回调
    if (toggle !== visible) {
      // onVisibleChange(toggle)
    }
  }
}

const handleClick = (props: IPortalProps) => () => {
  toggle(props, 'click', true)
}

const handleMouseEnter = () => {}

const handleMouseLeave = () => {}

const renderChildren = ({ disabled }: IPortalProps, children: React.ReactNode) => {
  if (typeof children === 'string') {
    return <span>{children}</span>
  }
  if (children) {
    return React.cloneElement(children as any, {
      disabled
    })
  }
  return null
}

const renderDropDown = (
  { prefixCls, dropDownClassName, transitionName, dropDownStyle, visible, content }: IPortalProps,
  contentRef: React.MutableRefObject<HTMLDivElement>
) => {
  const classes = cx(
    prefixCls,
    {
      // [`${prefixCls}-${newPlacement}`]: newPlacement,
      // [`${prefixCls}-triangle`]: hasTriangle
    },
    dropDownClassName
  )

  return (
    <Animate components="" transitionName={transitionName}>
      {visible ? (
        <div
          className={classes}
          ref={contentRef}
          // onClick={() => {
          //   onVisibleChange(false)
          // }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={dropDownStyle}
        >
          <div className={`${prefixCls}-content`}>{content}</div>
        </div>
      ) : null}
    </Animate>
  )
}

const getContainer = ({ getContainer }: IPortalProps) => {
  if (getContainer) {
    return getContainer()
  }
  return document.body
}

const Portal: React.FC<IPortalProps> = props => {
  const {
    // trigger,
    wrapperComponent: Component,
    wrapperStyle,
    children
  } = props

  const [mountNode, setMountNode] = useState(null)

  const wrapperRef = useRef<HTMLElement>()
  const contentRef = useRef<HTMLDivElement>()

  useEffect(() => {
    setMountNode(getContainer(props))
  }, [getContainer(props)])

  // console.log(trigger);

  return (
    <React.Fragment>
      <Component
        onClick={handleClick(props)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={wrapperStyle}
        ref={wrapperRef}
      >
        {renderChildren(props, children)}
      </Component>
      {mountNode
        ? ReactDOM.createPortal(renderDropDown(props, contentRef), getContainer(props))
        : null}
    </React.Fragment>
  )
}

Portal.defaultProps = defaultProps

export default Portal
