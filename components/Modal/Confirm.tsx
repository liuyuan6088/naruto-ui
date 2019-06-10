import * as React from 'react'
import * as ReactDOM from 'react-dom'
import cx from 'classnames'
import Modal from './Modal'
import Button from '../Button'
import Icon from '../Icon'
import { primaryName } from '../utils/constant'
import { IAlertProps } from './type'
import './style/index.less'

const noop = () => {}
const prefixCls = `${primaryName}-modal-confirm`
export interface Close {
  close: () => void
}

const Confirm = ({
  content,
  icon = <Icon type="question-circle" color="#faad14" />,
  okText = '确认',
  onOk = noop,
  okButtonProps,
  title,
  onCancel = noop,
  cancelButtonProps,
  cancelText = '取消',
  className,
  hasCancelBtn = true,
  ...rest
}: IAlertProps): Close => {
  let isClosed = false

  const div = document.createElement('div')
  document.body.appendChild(div)

  const classes = cx(`${prefixCls}`, className)

  const close = () => {
    ReactDOM.render(renderModal(false), div)
  }

  const destroy = () => {
    ReactDOM.unmountComponentAtNode(div)
    if (div && div.parentNode) {
      div.parentNode.removeChild(div)
    }
  }

  const handleClick = () => {
    if (isClosed) return
    Promise.resolve(onOk())
      .then(() => {
        isClosed = true
        close()
      })
      .catch(() => {
        isClosed = true
        close()
      })
  }

  const renderModal = (visible: boolean) => {
    return (
      <Modal
        {...rest}
        closable={false}
        onCancel={() => {
          onCancel()
          close()
        }}
        title={null}
        footer={null}
        visible={visible}
        afterClose={destroy}
        className={classes}
      >
        <div className={`${prefixCls}-wrapper`}>
          <div className={`${prefixCls}-body`}>
            <div className={`${prefixCls}-body-header`}>
              {icon}
              {title ? <div className={`${prefixCls}-title`}>{title}</div> : null}
            </div>
            {content ? <div className={`${prefixCls}-content`}>{content}</div> : null}
          </div>
          <div className={`${prefixCls}-btn`}>
            {hasCancelBtn ? (
              <Button
                onClick={() => {
                  onCancel()
                  close()
                }}
                {...cancelButtonProps}
              >
                {cancelText}
              </Button>
            ) : null}
            <Button type="primary" onClick={handleClick} {...okButtonProps}>
              {okText}
            </Button>
          </div>
        </div>
      </Modal>
    )
  }

  ReactDOM.render(renderModal(true), div)

  return {
    close
  }
}

export default Confirm

export function info({
  icon = <Icon type="info-circle" color="#1890ff" />,
  hasCancelBtn = false,
  okText = '知道了',
  ...rest
}: IAlertProps) {
  return Confirm({ icon, hasCancelBtn, okText, ...rest })
}

export function success({
  icon = <Icon type="check-circle" color="#52c41a" />,
  hasCancelBtn = false,
  okText = '知道了',
  ...rest
}: IAlertProps) {
  return Confirm({ icon, hasCancelBtn, okText, ...rest })
}

export function error({
  icon = <Icon type="close-circle" color="#f5222d" />,
  hasCancelBtn = false,
  okText = '知道了',
  ...rest
}: IAlertProps) {
  return Confirm({ icon, hasCancelBtn, okText, ...rest })
}

export function warning({
  icon = <Icon type="warning-circle" color="#faad14" />,
  hasCancelBtn = false,
  okText = '知道了',
  ...rest
}: IAlertProps) {
  return Confirm({ icon, hasCancelBtn, okText, ...rest })
}
