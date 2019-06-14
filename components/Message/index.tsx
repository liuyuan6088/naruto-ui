import * as React from 'react'
import Notification from '../n-notification'
import { Config, Notice, NoticeRes } from './type'
import { InitRes } from '../n-notification/type'
import Icon from '../Icon'
import { primaryName } from '../utils/constant'
import './style/index.less'

let root: InitRes | null = null
let duration = 3
let top: number
let getContainer: () => HTMLElement
let maxCount: number
let transitionName = 'move-up'

const config = ({
  maxCount: propsMaxCount,
  getContainer: propsGetContainer,
  top: propsTop,
  duration: propsDuration,
  transitionName: propsTransitionName
}: Config) => {
  if (propsMaxCount || propsMaxCount === 0) {
    maxCount = propsMaxCount
  }
  if (propsGetContainer) {
    getContainer = propsGetContainer
  }
  if (propsTop || propsTop === 0) {
    top = propsTop
  }
  if (propsDuration || propsDuration === 0) {
    duration = propsDuration
  }
  if (propsTransitionName || propsTransitionName === '') {
    transitionName = propsTransitionName
  }
}

const notice = (params: Notice): NoticeRes => {
  let addRes = {
    close: () => {}
  }

  let closePromise = new Promise(resolve => {
    // cb 执行promise resolve
    let closeCb = () => {
      const { onClose } = params
      if (onClose) {
        onClose()
      }
      resolve(true)
    }
    if (!root) {
      root = Notification.init({
        duration,
        top,
        getContainer,
        maxCount,
        prefixCls: `${primaryName}-message`,
        transitionName
      })
    }

    addRes = (root as InitRes).add({
      ...params,
      onClose: closeCb
    })
  })

  const result: NoticeRes = () => {
    const { close } = addRes
    const { onClose } = params
    if (onClose) {
      onClose()
    }
    close()
  }
  result.then = (filled, rejected?) => {
    return closePromise.then(filled, rejected)
  }

  result.promise = closePromise
  return result
}

const info = (params: Notice) => {
  if (!('icon' in params)) {
    params.icon = <Icon className="message-info" type="info-circle-fill" />
  }
  return notice(params)
}

const success = (params: Notice) => {
  if (!('icon' in params)) {
    params.icon = <Icon className="message-success" type="check-circle-fill" />
  }
  return notice(params)
}

const error = (params: Notice) => {
  if (!('icon' in params)) {
    params.icon = <Icon className="message-error" type="close-circle-fill" />
  }
  return notice(params)
}

const warning = (params: Notice) => {
  if (!('icon' in params)) {
    params.icon = <Icon className="message-warning" type="info-circle-fill" />
  }
  return notice(params)
}

const loading = (params: Notice) => {
  if (!('icon' in params)) {
    params.icon = <Icon className="message-info" spin type="sync" />
  }
  return notice(params)
}

const destroy = () => {
  if (root) {
    root.destroy()
    root = null
  }
}

const message = {
  config,
  success,
  info,
  error,
  warning,
  loading,
  destroy
}

export default message
