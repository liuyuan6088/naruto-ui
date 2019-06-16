import * as React from 'react'
import Notification from '../n-notification'
import Icon from '../Icon'
import cx from 'classnames'
import { InitRes, PlacementType, PlacementTypes } from '../n-notification/type'
import { Config, NoticeRes, Notice, ApiFn } from './type'
import { primaryName } from '../utils/constant'
import './style/index.less'

const prefixCls = `${primaryName}-notification`
const defaultClassName = `${primaryName}-information-notification`

let simpleKey = 0
let rootList: Array<InitRes | null> = [null, null, null, null]
let getContainer: () => HTMLElement
let duration = 4
let top = 24
let bottom = 24
let transitionName = 'move-right'
let placement: PlacementType = PlacementTypes[1]

const getContainerStyle = (placement: PlacementType) => {
  return new Map([
    [PlacementTypes[0], { top: 24, left: 0 }],
    [PlacementTypes[1], { top: 24, right: 0 }],
    [PlacementTypes[2], { bottom: 24, left: 0, top: 'auto' }],
    [PlacementTypes[3], { bottom: 24, right: 0, top: 'auto' }]
  ]).get(placement)
}

const getTransitionName = (placement: PlacementType) => {
  return new Map([
    [PlacementTypes[0], 'move-left'],
    [PlacementTypes[1], 'move-right'],
    [PlacementTypes[2], 'move-left'],
    [PlacementTypes[3], 'move-right']
  ]).get(placement)
}

const config = ({
  getContainer: propsGetContainer,
  top: propsTop,
  bottom: propsBottom,
  duration: propsDuration,
  placement: propsPlacement,
  transitionName: propsTransitionName
}: Config) => {
  if (propsGetContainer) {
    getContainer = propsGetContainer
  }
  if (propsPlacement) {
    placement = propsPlacement
  }
  if (propsTop || propsTop === 0) {
    top = propsTop
  }
  if (propsBottom || propsBottom === 0) {
    bottom = propsBottom
  }
  if (propsDuration || propsDuration === 0) {
    duration = propsDuration
  }
  if (propsTransitionName || propsTransitionName === '') {
    transitionName = propsTransitionName
  }
}

const notification = (params: Notice) => {
  const { message, description, icon, btn, className, placement: paramsPlacement } = params

  // params => 设置placement 选择对应root
  const itemPlacement = paramsPlacement || placement

  // 位置
  const containerStyle = getContainerStyle(itemPlacement)
  // placement => 动画
  let placementTransitionName = getTransitionName(itemPlacement)
  // 过滤掉props.transitionName
  if (transitionName === '') {
    placementTransitionName = transitionName
  }

  const contentClasses = cx(`${prefixCls}-content`)
  const itemClassName = cx(
    {
      [`${prefixCls}-with-icon`]: icon
    },
    className
  )
  const content = (
    <div className={contentClasses}>
      <div className={`${prefixCls}-message`}>{message}</div>
      <div className={`${prefixCls}-description`}>{description}</div>
      {btn && <div className={`${prefixCls}-btn`}>{btn}</div>}
    </div>
  )

  let addRes = {
    close: () => {}
  }

  let closePromise = new Promise(resolve => {
    let closeCb = () => {
      const { onClose } = params
      if (onClose) {
        onClose()
      }
      resolve(true)
    }
    const rootIndex = PlacementTypes.findIndex(e => e === itemPlacement)

    if (!rootList[rootIndex]) {
      rootList[rootIndex] = Notification.init({
        duration,
        top,
        bottom,
        placement,
        getContainer,
        closable: true,
        className: defaultClassName,
        style: containerStyle,
        prefixCls: prefixCls,
        transitionName: placementTransitionName
      })
    }
    simpleKey++
    addRes = (rootList[rootIndex] as InitRes).add({
      ...params,
      className: itemClassName,
      content,
      onClose: closeCb,
      simpleKey: 'key' in params ? params.key : simpleKey
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

const apiIconType = {
  open: '',
  info: 'info-circle-fill',
  success: 'check-circle-fill',
  error: 'close-circle-fill',
  warning: 'info-circle-fill'
}

const apiFn: ApiFn = Object.keys(apiIconType).reduce((res, e) => {
  res[e] = (params: Notice) => {
    if (!('icon' in params) && apiIconType[e]) {
      params.icon = <Icon className={`notification-${e}`} type={apiIconType[e]} />
    }
    return notification(params)
  }
  return res
}, {})

const destroy = () => {
  rootList.forEach(e => e && e.destroy())
  rootList = Array.from({ length: 4 }, _ => null)
  simpleKey = 0
}

const close = (key: string | number) => {
  rootList.forEach(e => e && e.remove(key))
}

export default {
  ...apiFn,
  destroy,
  close,
  config
}
