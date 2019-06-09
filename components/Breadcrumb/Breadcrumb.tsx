import * as React from 'react'
import cx from 'classnames'
import BreadcrumbItem from './BreadcrumbItem'
import { primaryName } from '../utils/constant'
import { IBreadcrumbProps, Route } from './type'
import './style/index.less'

const defaultProps: IBreadcrumbProps = {
  prefixCls: `${primaryName}-breadcrumb`,
  separator: '/',
  params: {}
}

const getBreadcrumbName = (route: Route, params: any) => {
  if (!route.breadcrumbName) {
    return null
  }
  const paramsKeys = Object.keys(params).join('|')
  const name = route.breadcrumbName.replace(
    new RegExp(`:(${paramsKeys})`, 'g'),
    (replacement, key) => params[key] || replacement
  )
  return name
}

const defaultItemRender = (route: Route, params: object, routes: Route[], paths: string[]) => {
  const isLastItem = routes.indexOf(route) === routes.length - 1
  const name = getBreadcrumbName(route, params)
  return isLastItem ? <span>{name}</span> : <a href={`#/${paths.join('/')}`}>{name}</a>
}

const renderBreadcrumb = (props: IBreadcrumbProps) => {
  const { routes, params = {}, itemRender = defaultItemRender, separator } = props
  let crumbs = null
  if (routes && routes.length > 0) {
    const paths: string[] = []
    crumbs = routes.map((route, index) => {
      route.path = route.path || ''
      let path: string = route.path.replace(/^\//, '')
      Object.keys(params).forEach(key => {
        path = path.replace(`:${key}`, params[key])
      })
      if (path) {
        paths.push(path)
      }

      return (
        <BreadcrumbItem
          isLast={index === routes.length - 1}
          separator={separator}
          key={route.breadcrumbName || path}
        >
          {itemRender(route, params, routes, paths)}
        </BreadcrumbItem>
      )
    })
    return crumbs
  }

  return crumbs
}

const Breadcrumb: React.FC<IBreadcrumbProps> & { Item?: typeof BreadcrumbItem } = props => {
  const { separator, prefixCls, className, style, children } = props

  const classes = cx(prefixCls, className)

  return (
    <div style={style} className={classes}>
      {children
        ? React.Children.map(children, (element: any, index) =>
            element
              ? React.cloneElement(element, {
                  separator,
                  key: index
                })
              : element
          )
        : renderBreadcrumb(props)}
    </div>
  )
}

Breadcrumb.defaultProps = defaultProps

export default Breadcrumb
