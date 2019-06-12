import * as React from 'react'
import { ISpinProps } from './type'
import cx from 'classnames'
import { debounce } from 'loadsh'
import { primaryName } from '../utils/constant'
import './style/index.less'

const { useState, useEffect } = React

const defaultProps: ISpinProps = {
  prefixCls: `${primaryName}-spin`,
  spinning: true
}

let defaultIndicator: React.ReactNode = null

const setDefaultIndicator = (indicator: React.ReactNode) => {
  defaultIndicator = indicator
}

const renderIndicator = (props: ISpinProps, show: boolean) => {
  const { prefixCls, tip, indicator: propsIndicator, children } = props
  const indicator = defaultIndicator || propsIndicator || (
    <div className={`${prefixCls}-default-spin`}>
      {Array.from({ length: 12 }, (_, k) => (
        <span key={k} className={`${prefixCls}-sk-circle${k}`} />
      ))}
    </div>
  )
  const content = (
    <React.Fragment>
      <div className={`${prefixCls}-spin-container`}>{indicator}</div>
      {tip && <div className={`${prefixCls}-tip`}>{tip}</div>}
    </React.Fragment>
  )
  if (children) {
    const classes = cx(`${prefixCls}-content`)
    return (
      <React.Fragment>
        <div className={classes}>{children}</div>

        {show && <div className={`${prefixCls}-nested-loading`}>{content}</div>}
      </React.Fragment>
    )
  }
  return content
}

const Spin: React.FC<ISpinProps> & {
  setDefaultIndicator?: typeof setDefaultIndicator
} = props => {
  const { prefixCls, className, style, size, spinning, delay, children } = props

  const [loading, setLoading] = useState<boolean>(spinning)

  useEffect(() => {
    if (delay) {
      const delaySetLoading = debounce(setLoading, delay)
      delaySetLoading(spinning)
    }
  }, [spinning, delay])

  // 使用内部loading，还是props
  const show = delay ? loading : spinning

  const classes = cx(
    prefixCls,
    {
      [`${prefixCls}-${size}`]: size,
      [`${prefixCls}-container`]: children,
      [`${prefixCls}-loading-container`]: show
    },
    className
  )

  return (
    <div className={classes} style={style}>
      {renderIndicator(props, show)}
    </div>
  )
}

Spin.defaultProps = defaultProps
Spin.setDefaultIndicator = setDefaultIndicator

export default Spin
