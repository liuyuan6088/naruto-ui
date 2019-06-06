import * as React from 'react'
import cx from 'classnames'
import * as warning from 'warning'
import IconFont from './IconFont'
import { IIconProps } from './type'
import { primaryName } from '../utils/constant'
import './style/index.less'

const { useCallback, useEffect } = React
const cacheScript = new Set<string>()
const url = 'https://at.alicdn.com/t/font_1127944_82mztmm5t8t.js'

const defaultProps: IIconProps = {
  type: '',
  prefixCls: `${primaryName}-icon`
}

export const creatScript = (url: string) => {
  const script = document.createElement('script')
  script.src = url
  cacheScript.add(url)
  document.body.appendChild(script)
}

const Icon: React.FC<IIconProps> & { createFromIconfontCN?: typeof IconFont } = props => {
  const { size, color, type, style, className, prefixCls, spin, children, ...rest } = props

  useEffect(() => {
    if (!cacheScript.has(url)) {
      creatScript(url)
    }
  }, [])

  const getStyle = useCallback(() => {
    const cloneStyle: React.CSSProperties = { ...style }
    if (size) cloneStyle.fontSize = size
    if (color) cloneStyle.color = color
    return cloneStyle
  }, [size, color, style])

  const classes = cx(
    prefixCls,
    {
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-spin`]: spin
    },
    className
  )

  if (!children && !type) {
    warning(false, 'Icon Should have `type` prop.')
  }

  return (
    <svg className={classes} {...rest} style={getStyle()}>
      {children || <use xlinkHref={`#icon-${type}`} />}
    </svg>
  )
}

Icon.defaultProps = defaultProps
Icon.createFromIconfontCN = IconFont

export default Icon
