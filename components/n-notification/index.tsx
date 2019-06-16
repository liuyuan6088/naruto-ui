import Notification from './Notification'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Properties, Notices, Params, InitRes, AddRes } from './type'

const symbolKey = (list: any[]) => {
  let unique = (Math.random() + new Date().getTime()).toString(32).slice(0, 8)
  if (list.includes(unique)) {
    return symbolKey(list)
  } else {
    return unique
  }
}

const init = (properties: Properties): InitRes => {
  let notices: Notices[] = []
  const div = document.createElement('div')
  const { getContainer, maxCount, ...rest } = properties
  if (getContainer) {
    const root = getContainer()
    root.appendChild(div)
  } else {
    document.body.appendChild(div)
  }

  ReactDOM.render(<Notification {...rest} notices={notices} />, div)

  const destroy = () => {
    notices = []
    ReactDOM.unmountComponentAtNode(div)
    if (div && div.parentNode) {
      div.parentNode.removeChild(div)
    }
  }

  const remove = (key: any) => {
    const noticesFilter = notices.filter(e => e.key !== key)
    if (noticesFilter.length === notices.length) {
      return
    }
    notices = noticesFilter
    ReactDOM.render(<Notification {...rest} deleteNotice={remove} notices={notices} />, div)
  }

  const add = (params: Params): AddRes => {
    let { simpleKey } = params

    const noticesKeys = []
    const noticesUpdateKeys = []
    notices.forEach(e => {
      if (!e) return
      if (e.key) noticesKeys.push(e.key)
      if (e.updateKey) noticesUpdateKeys.push(e.updateKey)
    })

    const targetIndex = notices.findIndex(e => e.key === simpleKey)
    if (targetIndex > -1) {
      notices[targetIndex] = { key: simpleKey, ...params, updateKey: symbolKey(noticesUpdateKeys) }
    } else {
      simpleKey = simpleKey ? simpleKey : symbolKey(noticesKeys)
      notices.push({ key: simpleKey, ...params })
    }
    if (maxCount === 0) {
      notices = []
    }
    if (maxCount) {
      notices = notices.slice(-maxCount)
    }

    ReactDOM.render(<Notification {...rest} deleteNotice={remove} notices={notices} />, div)

    // 销毁指定dom
    return {
      key: simpleKey,
      close: () => remove(simpleKey)
    }
  }

  return {
    add,
    remove,
    destroy
  }
}

export default {
  init
}
