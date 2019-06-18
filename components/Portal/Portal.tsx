import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { primaryName } from '../utils/constant'
import Animate from 'rc-animate'
import { IPortalProps } from './type'
import cx from 'classnames'
import { getClientSize } from '../utils/util'
import { useEnhancedEffect, useClickOutSide } from '../utils/useCustom'

const { useState, useRef, useEffect } = React

const defaultDropdownTransitionName = ['slide-up', 'slide-down']

const defaultProps: IPortalProps = {
  prefixCls: `${primaryName}-dropdown`,
  placement: 'top',
  trigger: 'hover',
  wrapperComponent: 'div',
  transitionName: 'fade',
  wrapperStyle: {},
  dropDownStyle: {},
  hasTriangle: false,
  disabled: false,
  isClickOutSideClose: true,
  autoAdjustOverflow: true,
  offset: 0,
  onVisibleChange: () => {},
  mouseEnterDelay: 0.1,
  mouseLeaveDelay: 0.1
}

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

const getContainer = ({ getContainer }: IPortalProps) => {
  if (getContainer) {
    return getContainer()
  }
  return document.body
}

const getPlacement = (
  { placement, autoAdjustOverflow }: IPortalProps,
  wrapperRef: React.MutableRefObject<HTMLElement>,
  contentRef: React.MutableRefObject<HTMLElement>,
  newPlacement: IPortalProps['placement'],
  setPlacement: any
) => {
  let clonePlacement: string = placement
  const rect = (wrapperRef.current as HTMLElement).getBoundingClientRect()
  const contentRect = (contentRef.current as HTMLElement).getBoundingClientRect()
  if (autoAdjustOverflow) {
    // 浏览器尺寸
    const { width, height } = getClientSize()
    switch (placement) {
      case 'top':
        clonePlacement = rect.top < contentRect.height ? 'bottom' : 'top'
        clonePlacement = `${clonePlacement}${
          rect.left + rect.width / 2 < contentRect.width / 2 ? 'Left' : ''
        }`
        break
      case 'topLeft':
        clonePlacement = rect.top < contentRect.height ? 'bottom' : 'top'
        clonePlacement = `${clonePlacement}${
          width - rect.left < contentRect.width / 2 ? 'Right' : 'Left'
        }`
        break
      case 'topRight':
        clonePlacement = rect.top < contentRect.height ? 'bottom' : 'top'
        clonePlacement = `${clonePlacement}${rect.right < contentRect.width ? 'Left' : 'Right'}`
        break
      case 'bottom':
        clonePlacement = height - rect.bottom < contentRect.height ? 'top' : 'bottom'
        clonePlacement = `${clonePlacement}${
          rect.left + rect.width / 2 < contentRect.width / 2 ? 'Left' : ''
        }`
        break
      case 'bottomLeft':
        clonePlacement = height - rect.bottom < contentRect.height ? 'top' : 'bottom'
        clonePlacement = `${clonePlacement}${
          width - rect.left < contentRect.width / 2 ? 'Right' : 'Left'
        }`
        break
      case 'bottomRight':
        clonePlacement = height - rect.bottom < contentRect.height ? 'top' : 'bottom'
        clonePlacement = `${clonePlacement}${rect.right < contentRect.width ? 'Left' : 'Right'}`
        break
      case 'left':
        clonePlacement = rect.left < contentRect.width ? 'right' : 'left'
        clonePlacement = `${clonePlacement}${
          rect.top + rect.height / 2 < contentRect.height / 2 ? 'Top' : ''
        }`
        break
      case 'leftTop':
        clonePlacement = rect.left < contentRect.width ? 'right' : 'left'
        clonePlacement = `${clonePlacement}${
          height - rect.top < contentRect.height ? 'Bottom' : 'Top'
        }`
        break
      case 'leftBottom':
        clonePlacement = rect.left < contentRect.width ? 'right' : 'left'
        clonePlacement = `${clonePlacement}${rect.bottom < contentRect.height ? 'Top' : 'Bottom'}`
        break
      case 'right':
        clonePlacement = width - rect.right < contentRect.width ? 'left' : 'right'
        clonePlacement = `${clonePlacement}${
          rect.top + rect.height / 2 < contentRect.height / 2 ? 'Top' : ''
        }`
        break
      case 'rightTop':
        clonePlacement = width - rect.right < contentRect.width ? 'left' : 'right'
        clonePlacement = `${clonePlacement}${
          height - rect.top < contentRect.height ? 'Bottom' : 'Top'
        }`
        break
      case 'rightBottom':
        clonePlacement = width - rect.right < contentRect.width ? 'left' : 'right'
        clonePlacement = `${clonePlacement}${rect.bottom < contentRect.height ? 'Top' : 'Bottom'}`
        break
      default:
        break
    }
    // 修改方向
    if (clonePlacement !== newPlacement) {
      setPlacement(clonePlacement)
    }
  }
  return { rect, contentRect, clonePlacement }
}

const setContentStyle = (
  contentRef: React.MutableRefObject<HTMLElement>,
  top: string,
  left: string
) => {
  ;(contentRef.current as HTMLElement).style.top = top
  ;(contentRef.current as HTMLElement).style.left = left
}

const getPosition = (
  props: IPortalProps,
  wrapperRef: React.MutableRefObject<HTMLElement>,
  contentRef: React.MutableRefObject<HTMLElement>,
  newPlacement: IPortalProps['placement'],
  setPlacement: any
) => {
  const { offset, mode } = props
  const { rect, contentRect, clonePlacement } = getPlacement(
    props,
    wrapperRef,
    contentRef,
    newPlacement,
    setPlacement
  )
  // top = wrapperRef 距离浏览器顶部距离+高度+偏移度+浏览器Y滚动的距离
  let top = `${rect.top + rect.height + offset + window.pageYOffset}px`
  // left = wrapperRef 距离浏览器左侧距离+浏览器X滚动的距离
  let left = `${rect.left + window.pageXOffset}px`
  if (contentRect.width < rect.width && mode === 'dropdown') {
    contentRef.current.style.minWidth = `${rect.width}px`
  }
  switch (clonePlacement) {
    case 'top':
      top = `${rect.top - offset - contentRect.height + window.pageYOffset}px`
      left = `${rect.left + rect.width / 2 - contentRect.width / 2 + window.pageXOffset}px`
      setContentStyle(contentRef, top, left)
      break
    case 'topLeft':
      top = `${rect.top - offset - contentRect.height + window.pageYOffset}px`
      left = `${rect.left + window.pageXOffset}px`
      setContentStyle(contentRef, top, left)
      break
    case 'topRight':
      top = `${rect.top - offset - contentRect.height + window.pageYOffset}px`
      left = `${rect.right - contentRect.width + window.pageXOffset}px`
      setContentStyle(contentRef, top, left)
      break
    case 'bottom':
      top = `${rect.top + rect.height + offset + window.pageYOffset}px`
      left = `${rect.left + rect.width / 2 - contentRect.width / 2 + window.pageXOffset}px`
      setContentStyle(contentRef, top, left)
      break
    case 'bottomLeft':
      top = `${rect.top + rect.height + offset + window.pageYOffset}px`
      left = `${rect.left + window.pageXOffset}px`
      setContentStyle(contentRef, top, left)
      break
    case 'bottomRight':
      top = `${rect.top + rect.height + offset + window.pageYOffset}px`
      left = `${rect.right - contentRect.width + window.pageXOffset}px`
      setContentStyle(contentRef, top, left)
      break
    case 'left':
      top = `${rect.top + rect.height / 2 - contentRect.height / 2 + window.pageYOffset}px`
      left = `${rect.left - offset - contentRect.width + window.pageXOffset}px`
      setContentStyle(contentRef, top, left)
      break
    case 'leftTop':
      top = `${rect.top + window.pageYOffset}px`
      left = `${rect.left - offset - contentRect.width + window.pageXOffset}px`
      setContentStyle(contentRef, top, left)
      break
    case 'leftBottom':
      top = `${rect.top + rect.height - contentRect.height + window.pageYOffset}px`
      left = `${rect.left - offset - contentRect.width + window.pageXOffset}px`
      setContentStyle(contentRef, top, left)
      break
    case 'right':
      top = `${rect.top + rect.height / 2 - contentRect.height / 2 + window.pageYOffset}px`
      left = `${rect.right + offset + window.pageXOffset}px`
      setContentStyle(contentRef, top, left)
      break
    case 'rightTop':
      top = `${rect.top + window.pageYOffset}px`
      left = `${rect.right + offset + window.pageXOffset}px`
      setContentStyle(contentRef, top, left)
      break
    case 'rightBottom':
      top = `${rect.top + rect.height - contentRect.height + window.pageYOffset}px`
      left = `${rect.right + offset + window.pageXOffset}px`
      setContentStyle(contentRef, top, left)
      break
    default:
      setContentStyle(contentRef, top, left)
      break
  }
}

const Portal: React.FC<IPortalProps> = props => {
  const {
    trigger,
    disabled,
    isClickOutSideClose,
    wrapperComponent: Component,
    wrapperStyle,
    wrapperClassName,
    placement,
    onVisibleChange,
    visible: controlledVisible,
    mouseEnterDelay,
    mouseLeaveDelay,
    children
  } = props

  const [mountNode, setMountNode] = useState(null)
  const [visible, setVisible] = useState(false)
  const [newPlacement, setPlacement] = React.useState(placement)

  const wrapperRef = useRef<HTMLElement>()
  const contentRef = useRef<HTMLDivElement>()
  const timeoutRef = React.useRef<any>()

  useEffect(() => {
    if (controlledVisible !== undefined) {
      setVisible(controlledVisible)
    }
  }, [controlledVisible])

  useEffect(() => {
    setMountNode(getContainer(props))
  }, [getContainer(props)])

  const toggle = (triggerStr: string, bool: boolean) => {
    if (disabled) return
    if (trigger === triggerStr && bool !== visible) {
      if (controlledVisible === undefined) {
        setVisible(bool)
      }
      onVisibleChange(bool)
    }
  }

  const clearTime = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  const handleClick = () => {
    toggle('click', !visible)
  }

  const handleMouseEnter = () => {
    clearTime()
    timeoutRef.current = setTimeout(() => {
      toggle('hover', true)
    }, mouseEnterDelay * 1000)
  }

  const handleMouseLeave = () => {
    clearTime()
    timeoutRef.current = setTimeout(() => {
      toggle('hover', false)
    }, mouseLeaveDelay * 1000)
  }

  const renderDropDown = ({
    hasTriangle,
    prefixCls,
    dropDownClassName,
    transitionName,
    dropDownStyle,
    mode,
    content
  }: IPortalProps) => {
    const classes = cx(
      prefixCls,
      {
        [`${prefixCls}-${newPlacement}`]: newPlacement, // 类名替换 修改方向
        [`${prefixCls}-triangle`]: hasTriangle
      },
      dropDownClassName
    )

    const contentNode = (
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
    )

    if (transitionName === '') {
      return contentNode
    }

    if (mode === 'dropdown' && defaultDropdownTransitionName.includes(transitionName)) {
      transitionName = newPlacement.indexOf('top') > -1 ? 'slide-down' : 'slide-up'
    }
    // TODO: Animate => 修改方向第一次无动画 使用CSSTransition没有，同时修改css动画
    return (
      <Animate component="" transitionName={transitionName} transitionAppear>
        {visible ? contentNode : null}
      </Animate>
    )
  }

  useEnhancedEffect(() => {
    if (visible && mountNode) {
      getPosition(props, wrapperRef, contentRef, newPlacement, setPlacement)
    }
  }, [visible, mountNode])

  useClickOutSide([contentRef, wrapperRef], () => {
    if (isClickOutSideClose) {
      toggle('click', false)
    }
  })

  return (
    <React.Fragment>
      <Component
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={wrapperStyle}
        className={wrapperClassName}
        ref={wrapperRef}
      >
        {renderChildren(props, children)}
      </Component>
      {mountNode ? ReactDOM.createPortal(renderDropDown(props), getContainer(props)) : null}
    </React.Fragment>
  )
}

Portal.defaultProps = defaultProps

export default Portal
