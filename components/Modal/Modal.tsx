import * as React from 'react'
import cx from 'classnames'
import Overlay from '../Overlay'
import Button from '../Button'
import Confirm, { info, success, error, warning } from './Confirm'
import { IModalProps } from './type'
import { primaryName } from '../utils/constant'
import './style/index.less'

const noop = () => {}

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
  maskClosable: true
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
    afterClose
  } = props

  const classes = cx(
    {
      [`${prefixCls}-center`]: center
    },
    className
  )

  const widthStyle = width ? { width } : {}

  return (
    <Overlay
      visible={visible}
      prefixCls={prefixCls}
      wrapperStyle={{ ...widthStyle, ...style }}
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
