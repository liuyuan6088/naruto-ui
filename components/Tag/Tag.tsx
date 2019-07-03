import * as React from 'react'
import { ITagProps } from './type'
import cx from 'classnames'
import { primaryName } from '../utils/constant'
import './style/index.less'

const { useCallback } = React

const defaultProps = {
  prefixCls: `${primaryName}-tag`,
  onClick: () => {}
}

const Tag: React.FC<ITagProps> = props => {
  const { prefixCls, style, wrapperStyle, onClick, children, className } = props

  const getClassNames = useCallback(() => {
    return cx(prefixCls, className)
  }, [className])

  return (
    <div className={getClassNames()} onClick={onClick} style={style}>
      <div className={`${prefixCls}-wrapper`} style={wrapperStyle}>
        {children}
      </div>
    </div>
  )
}

Tag.defaultProps = defaultProps

export default Tag
