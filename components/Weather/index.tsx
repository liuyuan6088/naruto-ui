import * as React from 'react'
import { IWeatherProps } from './type'
// import cx from 'classnames'
import { primaryName } from '../utils/constant'
import './style/index.less'

// const { useCallback } = React;

const defaultProps = {
  prefixCls: `${primaryName}-weather`
}

const renderContent = ({ type, prefixCls }: IWeatherProps) => {
  if (type === 'cloudy') {
    return (
      <div className={`${prefixCls}-cloudy`}>
        <span className={`${prefixCls}-cloud`} />
      </div>
    )
  }
  if (type === 'sunny') {
    return (
      <div className={`${prefixCls}-sunny`}>
        <span className={`${prefixCls}-sun`} />
      </div>
    )
  }
  return null
}

const Weather: React.FC<IWeatherProps> = props => {
  const {
    // className,
    prefixCls
  } = props

  // const getClassNames = useCallback(() => {
  //   return cx(prefixCls, className)
  // }, [className])

  return <div className={prefixCls}>{renderContent(props)}</div>
}

Weather.defaultProps = defaultProps

export default Weather
