import * as React from 'react'
import cx from 'classnames'
import { primaryName } from '../utils/constant'
import { IProgressProps } from './type'
import './style/index.less'

const { useCallback } = React

const defaultProps: IProgressProps = {
  prefixCls: `${primaryName}-progress`,
  size: 'medium',
  type: 'line',
  percent: 0,
  status: 'normal',
  showInfo: true
}

const getInnerStyle = ({ activeColor, percent }: IProgressProps) => {
  let style: any = { width: `${percent}%` }
  if (activeColor) {
    style.backgroundColor = activeColor
  }
  return style
}

const getOuterStyle = ({ width }: IProgressProps) => {
  let style: any = {}
  if (width) {
    style.width = width
  }
  return style
}

const renderCircleText = ({ textRender, percent, prefixCls }: IProgressProps) => {
  if (textRender && typeof textRender === 'function') {
    return <div className={`${prefixCls}-circle-text`}>{textRender(percent)}</div>
  }
  return <div className={`${prefixCls}-circle-text`}>{`${percent}%`}</div>
}

const renderLine = (props: IProgressProps) => {
  const { showInfo, percent, prefixCls } = props
  const innerStyle = getInnerStyle(props)
  const outStyle = getOuterStyle(props)
  return (
    <React.Fragment>
      <div className={`${prefixCls}-container`}>
        <div className={`${prefixCls}-outer`} style={outStyle}>
          <div className={`${prefixCls}-inner`} style={innerStyle} />
        </div>
      </div>
      {showInfo ? <div className={`${prefixCls}-info`}>{`${percent}%`}</div> : null}
    </React.Fragment>
  )
}

const renderCircle = (props: IProgressProps) => {
  const { activeColor, percent, prefixCls } = props
  const style = activeColor ? { stroke: activeColor } : {}
  const strokeDashoffset = 289 * (1 - percent / 100)
  return (
    <React.Fragment>
      <svg className={`${prefixCls}-circle-container`} viewBox="0 0 100 100">
        <path
          className={`${prefixCls}-circle-outer`}
          d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92"
          fillOpacity="0"
        />
        <path
          className={`${prefixCls}-circle-inner`}
          d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92"
          fillOpacity="0"
          strokeDasharray="289 289"
          strokeDashoffset={strokeDashoffset}
          style={style}
        />
      </svg>
      {renderCircleText(props)}
    </React.Fragment>
  )
}

const Progress: React.FC<IProgressProps> = props => {
  const { type, size, status, showInfo, prefixCls, className } = props

  const getClassNames = useCallback(() => {
    return cx(
      prefixCls,
      {
        [`${prefixCls}-${type}`]: type,
        [`${prefixCls}-${size}`]: size,
        [`${prefixCls}-${status}`]: status,
        [`${prefixCls}-show-info`]: showInfo
      },
      className
    )
  }, [type, size, status, showInfo])

  return (
    <div className={getClassNames()}>
      {type === 'circle' ? renderCircle(props) : renderLine(props)}
    </div>
  )
}

Progress.defaultProps = defaultProps

export default Progress
