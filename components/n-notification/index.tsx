import Notification from './Notification'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Properties, Notices, Params, InitRes, AddRes } from './type'

let notices: Notices[] = []

const init = (properties: Properties): InitRes => {
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
    const key = Date.now()
    notices.push({ key, ...params })
    if (maxCount === 0) {
      notices = []
    }
    if (maxCount) {
      notices = notices.slice(-maxCount)
    }

    ReactDOM.render(<Notification {...rest} deleteNotice={remove} notices={notices} />, div)

    // 销毁指定dom
    return {
      close: () => remove(key)
    }
  }

  return {
    add,
    destroy
  }
}

export default {
  init
}
