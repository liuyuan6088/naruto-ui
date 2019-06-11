import * as React from 'react'
import cx from 'classnames'
import Overlay from '../Overlay'
import Button from '../Button'
import Confirm, { info, success, error, warning } from './Confirm'
import { IModalProps } from './type'
import { MousePosition } from '../Overlay/type'
import { primaryName } from '../utils/constant'
import './style/index.less'

const noop = () => {}
const { useEffect, useCallback } = React
let mousePosition: MousePosition | null
let mousePositionEventBinded: boolean

const defaultProps: IModalProps = {
  prefixCls: `${primaryName}-modal`,
  cancelText: '取消',
  okText: '确定',
  onOk: noop,
  onCancel: noop,
  visible: false,
  closable: true,
  destroy: true,
  esc: true,
  style: {},
  confirmLoading: false,
  maskClosable: true,
  centered: false
}

const renderHeader = ({ title, prefixCls }: IModalProps) => {
  if (title) {
    return <div className={`${prefixCls}-title`}>{title}</div>
  }
  return null
}

const renderFooter = ({
  cancelText,
  okText,
  onOk,
  okButtonProps,
  cancelButtonProps,
  footer,
  onCancel,
  confirmLoading
}: IModalProps) => {
  if (footer === null) return null
  return (
    <div>
      {footer || (
        <React.Fragment>
          <Button onClick={onCancel} {...cancelButtonProps}>
            {cancelText}
          </Button>
          <Button loading={confirmLoading} type="primary" onClick={onOk} {...okButtonProps}>
            {okText}
          </Button>
        </React.Fragment>
      )}
    </div>
  )
}

const Modal: React.FC<IModalProps> &
  Record<'confirm' | 'success' | 'error' | 'warning' | 'info', typeof Confirm> = props => {
  const {
    visible,
    children,
    prefixCls,
    closable,
    onCancel,
    destroy,
    esc,
    maskClosable,
    zIndex,
    className,
    style,
    width,
    center,
    afterClose,
    centered
  } = props

  const fn = useCallback(
    (e: MouseEvent) => {
      mousePosition = {
        x: e.x,
        y: e.y
      }
      // 100ms 内发生过点击事件，则从点击位置动画展示
      // 否则直接 zoom 展示
      const timer = setTimeout(() => {
        mousePosition = null
        clearTimeout(timer)
      }, 100)
    },
    [visible]
  )

  useEffect(() => {
    if (mousePositionEventBinded) {
      return () => {}
    }
    // 只有点击事件支持从鼠标位置动画展开
    window.document.documentElement.addEventListener('click', fn)
    mousePositionEventBinded = true
    return () => {
      window.document.documentElement.removeEventListener('click', fn)
      mousePositionEventBinded = false
    }
  }, [visible])

  const classes = cx(
    {
      [`${prefixCls}-center`]: center
    },
    className
  )

  const widthStyle = width ? { width } : {}

  // 默认top 80
  let wrapperStyle: React.CSSProperties = { top: 80, ...style }

  if (centered) {
    wrapperStyle = {
      ...wrapperStyle,
      top: '50%',
      transform: 'translate(-50%, -50%)'
    }
  }

  return (
    <Overlay
      visible={visible}
      prefixCls={prefixCls}
      wrapperStyle={{ ...widthStyle, ...wrapperStyle }}
      wrapperClassName={classes}
      footer={renderFooter(props)}
      header={renderHeader(props)}
      closable={closable}
      onClose={onCancel}
      destroy={destroy}
      esc={esc}
      maskClosable={maskClosable}
      zIndex={zIndex}
      afterClose={afterClose}
      mousePosition={mousePosition}
    >
      {children}
    </Overlay>
  )
}

Modal.defaultProps = defaultProps
Modal.confirm = Confirm
Modal.success = success
Modal.error = error
Modal.warning = warning
Modal.info = info

export default Modal
