import * as React from 'react'
import { IBreadcrumbItemProps } from './type'
import { primaryName } from '../utils/constant'
import './style/index.less'

const defaultProps: IBreadcrumbItemProps = {
  prefixCls: `${primaryName}-breadcrumb`,
  separator: '/'
}

const BreadcrumbItem: React.FC<IBreadcrumbItemProps> = props => {
  const { prefixCls, separator, children, onClick, isLast, ...rest } = props

  let link = null

  if ('href' in props) {
    link = (
      <a className={`${prefixCls}-link`} onClick={onClick} {...rest}>
        {children}
      </a>
    )
  } else {
    link = (
      <span onClick={onClick} className={`${prefixCls}-link`} {...rest}>
        {children}
      </span>
    )
  }
  if (children) {
    return (
      <span>
        {link}
        {!isLast && <span className={`${prefixCls}-separator`}>{separator}</span>}
      </span>
    )
  }
  return null
}

BreadcrumbItem.defaultProps = defaultProps

export default BreadcrumbItem
