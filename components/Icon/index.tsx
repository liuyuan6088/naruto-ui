import * as React from 'react'
import cx from 'classnames'
import * as warning from 'warning'
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

const Icon: React.FC<IIconProps> = props => {
  const { size, color, type, style, className, prefixCls, spin, ...rest } = props

  useEffect(() => {
    // console.log(cacheScript)
    if (!cacheScript.has(url)) {
      const script = document.createElement('script')
      script.src = url
      cacheScript.add(url)
      document.body.appendChild(script)
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

  warning(!!type, 'Icon Should have `type` prop.')

  return (
    <svg className={classes} {...rest} style={getStyle()}>
      <use xlinkHref={`#icon-${type}`} />
    </svg>
  )
}

Icon.defaultProps = defaultProps

export default Icon
