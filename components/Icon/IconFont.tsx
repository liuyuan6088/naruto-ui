import Icon, { creatScript } from './index'
import { IIconProps, CustomIconOptions } from './type'
import * as React from 'react'

const customCache = new Set<string>()

const creat = (options: CustomIconOptions = {}): React.SFC<IIconProps> => {
  const { scriptUrl } = options

  if (typeof scriptUrl === 'string' && !customCache.has(scriptUrl)) {
    creatScript(scriptUrl)
  }

  const Iconfont: React.SFC<IIconProps> = props => {
    const { children, ...rest } = props
    let content = null
    if (props.type) {
      content = <use xlinkHref={`#${props.type}`} />
    }
    if (children) {
      content = children
    }
    return <Icon {...rest}>{content}</Icon>
  }

  Iconfont.displayName = 'Iconfont'

  return Iconfont
}

export default creat
