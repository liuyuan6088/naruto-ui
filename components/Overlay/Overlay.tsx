import * as React from 'react'
import * as ReactDOM from 'react-dom'
import cx from 'classnames'
import Icon from '../Icon'
import { isObject } from 'lodash'
import { CSSTransition } from 'react-transition-group'
import { primaryName } from '../utils/constant'
import { hasScrollBar, getScrollBarWidth } from '../utils/util'
import { IOverlayProps, CSSTimer } from './type'
import './style/index.less'

const { useRef, useEffect, useState } = React

interface Animate {
  bodyRef: React.MutableRefObject<React.CSSProperties>
  wrapRef: React.MutableRefObject<HTMLElement>
  maskRef: React.MutableRefObject<HTMLElement>
  destroy: boolean
}

const defaultProps: IOverlayProps = {
  prefixCls: `${primaryName}-overlay`,
  contentAnimation: 'zoom',
  maskTimeout: 300,
  contentTimeout: 300,
  maskAnimation: 'fade',
  hasMask: true,
  visible: false,
  destroy: true,
  esc: false,
  afterClose: () => {}
}

const getBodyStyle = (bodyRef: React.MutableRefObject<React.CSSProperties>) => {
  const style: React.CSSProperties = {}
  if ('paddingRight' in document.body.style) {
    style.paddingRight = document.body.style.paddingRight
  }
  if ('overflow' in document.body.style) {
    style.overflow = document.body.style.overflow
  }
  bodyRef.current = style
}

const setDestroyStyle = ({ wrapRef, maskRef }: Animate, display: string) => {
  if (wrapRef && wrapRef.current) {
    wrapRef.current.style.display = display
  }
  if (maskRef && maskRef.current) {
    maskRef.current.style.display = display
  }
}

const onAnimateEnter = (animate: Animate) => {
  getBodyStyle(animate.bodyRef)
  if (hasScrollBar()) {
    // tslint:disable-next-line: radix
    document.body.style.paddingRight = `${parseInt(animate.bodyRef.current.paddingRight as string) +
      getScrollBarWidth()}px`
  }
  document.body.style.overflow = 'hidden'
  if (!animate.destroy) {
    setDestroyStyle(animate, '')
  }
}

const onAnimateExist = (animate: Animate) => {
  document.body.style.overflow = animate.bodyRef.current.overflow || ''
  document.body.style.paddingRight = `${animate.bodyRef.current.paddingRight}` || ''
  if (!animate.destroy) {
    setDestroyStyle(animate, 'none')
  }
}

const maskClick = (e: React.MouseEvent<HTMLElement>, { onClose }: IOverlayProps) => {
  if (e.target === e.currentTarget && onClose) {
    onClose(e)
  }
}

const keyDown = (e: React.KeyboardEvent<HTMLDivElement>, { onClose, esc }: IOverlayProps) => {
  if (esc && e.key === 'Escape' && onClose) {
    e.stopPropagation()
    onClose(e as any)
  }
}

const renderClosable = (props: IOverlayProps) => {
  const { closable, prefixCls, onClose } = props
  if (closable) {
    return (
      <div className={`${prefixCls}-wrapper-close`} onClick={onClose}>
        <Icon type="close" />
      </div>
    )
  }
  return null
}

const getMaxTimer = ({ contentTimeout, maskTimeout }: IOverlayProps) => {
  const contentTime = isObject(contentTimeout)
    ? (contentTimeout as CSSTimer).exit || 0
    : (contentTimeout as number)
  const maskTime = isObject(maskTimeout)
    ? (maskTimeout as CSSTimer).exit || 0
    : (maskTimeout as number)
  return Math.max(contentTime, maskTime)
}

const Overlay: React.FC<IOverlayProps> = props => {
  const {
    prefixCls,
    contentAnimation,
    zIndex,
    contentTimeout,
    visible,
    wrapperClassName,
    wrapperStyle,
    maskClosable,
    header,
    footer,
    children,
    destroy,
    maskClassName,
    hasMask,
    maskTimeout,
    maskAnimation,
    afterClose,
    mousePosition
  } = props

  const [transformOrigin, setTransformOrigin] = useState<string>('center center')
  const bodyRef = useRef<React.CSSProperties>()
  const modalRef = useRef<HTMLDivElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const maskRef = useRef<HTMLDivElement>(null)

  // 因为 动画库的原因，如果 `unmountExist` 为 false 就会直接渲染出来
  const [firstTime, setFirstTime] = React.useState(true)

  if (visible && firstTime) {
    setFirstTime(false)
  }

  // 处理destroy为false的时候第一次没动画的问题
  const getUnmount = React.useCallback(() => {
    return destroy ? true : !!firstTime
  }, [firstTime, destroy])

  const classStr = cx(prefixCls, wrapperClassName)
  const style = zIndex ? { zIndex } : {}

  const renderMask = () => {
    const style = zIndex ? { zIndex } : {}
    const classStr = cx(`${prefixCls}-mask`, maskClassName)

    if (hasMask) {
      return (
        <CSSTransition
          in={visible}
          timeout={maskTimeout}
          classNames={`${prefixCls}-${maskAnimation}`}
          // 当动画出场后在页面上移除包裹的dom节点
          unmountOnExit={getUnmount()}
          // 入场第一帧
          appear
        >
          <div ref={maskRef} className={classStr} style={style} />
        </CSSTransition>
      )
    }
    return null
  }

  const getContainer = () => {
    const classes = cx(`${prefixCls}-${contentAnimation}`)
    const node = (
      <CSSTransition
        in={visible}
        timeout={contentTimeout}
        style={{ transformOrigin }}
        classNames={classes}
        unmountOnExit={getUnmount()}
        onEnter={() => onAnimateEnter({ bodyRef, wrapRef, maskRef, destroy })}
        onExited={() => {
          afterClose()
          onAnimateExist({ bodyRef, wrapRef, maskRef, destroy })
        }}
        appear
      >
        <div
          className={classStr}
          onClick={maskClosable ? e => maskClick(e, props) : undefined}
          onKeyDown={e => keyDown(e, props)}
          ref={wrapRef}
          style={style}
          tabIndex={-1}
        >
          <div className={`${prefixCls}-wrapper`} style={wrapperStyle}>
            {renderClosable(props)}
            {header && <div className={cx(`${prefixCls}-wrapper-header`)}>{header}</div>}
            <div className={`${prefixCls}-wrapper-content`}>{children}</div>
            {footer && <div className={cx(`${prefixCls}-wrapper-footer`)}>{footer}</div>}
          </div>
        </div>
      </CSSTransition>
    )
    return (
      <CSSTransition in={visible} timeout={getMaxTimer(props)} unmountOnExit={getUnmount()} appear>
        <div ref={modalRef}>
          {renderMask()}
          {node}
        </div>
      </CSSTransition>
    )
  }

  useEffect(() => {
    if (wrapRef.current) {
      wrapRef.current.focus()
    }
    if (visible) {
      if (mousePosition) {
        setTransformOrigin(
          `${(mousePosition.x / document.body.clientWidth) * 100}% ${(mousePosition.y /
            document.body.clientHeight) *
            100}%`
        )
      }
    }
  }, [visible])

  return ReactDOM.createPortal(getContainer(), document.body)
}

Overlay.defaultProps = defaultProps

export default Overlay
