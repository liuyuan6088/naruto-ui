import * as React from 'react'
import Notification from '../n-notification'
import { Config, Notice } from './type'
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
  if (propsTransitionName) {
    transitionName = propsTransitionName
  }
}

const notice = (params: Notice) => {
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
  root.add(params)
}

const info = (params: Notice) => {
  if (!('icon' in params)) {
    params.icon = <Icon className="message-info" type="info-circle-fill" />
  }
  notice(params)
}

const success = (params: Notice) => {
  if (!('icon' in params)) {
    params.icon = <Icon className="message-success" type="check-circle-fill" />
  }
  notice(params)
}

const error = (params: Notice) => {
  if (!('icon' in params)) {
    params.icon = <Icon className="message-error" type="close-circle-fill" />
  }
  notice(params)
}

const warning = (params: Notice) => {
  if (!('icon' in params)) {
    params.icon = <Icon className="message-warning" type="info-circle-fill" />
  }
  notice(params)
}

const destroy = () => {
  if (root) {
    root.destroy()
    root = null
  }
}

export default {
  config,
  success,
  info,
  error,
  warning,
  destroy
}
