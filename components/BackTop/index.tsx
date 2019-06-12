import * as React from 'react'
import { IBackTopProps } from './type'
import Animate from 'rc-animate'
import { throttle } from 'loadsh'
import Icon from '../Icon'
import cx from 'classnames'
import { scrollToY } from '../utils/scrollTo'
import { primaryName } from '../utils/constant'
import './style/index.less'

const { useState, useEffect } = React

const defaultProps: IBackTopProps = {
  prefixCls: `${primaryName}-backTop`,
  visibilityHeight: 400,
  target: () => window
}

const handleScrollTo = ({ onClick }: IBackTopProps, targetNode: HTMLElement | Window) => (
  e: React.MouseEvent
) => {
  targetNode === window ? scrollToY(0) : scrollToY(0, targetNode as HTMLElement)
  if (onClick) {
    onClick(e)
  }
}

const renderChildren = ({ prefixCls }: IBackTopProps, children: React.ReactNode) => {
  if (typeof children === 'string') {
    return <div className={`${prefixCls}-string`}>{children}</div>
  }
  if (children) {
    return children
  }
  return (
    <div className={`${prefixCls}-content`}>
      <Icon type="totop" color="#fff" />
    </div>
  )
}

const BackTop: React.FC<IBackTopProps> = props => {
  const { className, prefixCls, style, visibilityHeight, target, children } = props

  const [visible, setVisible] = useState<boolean>(false)

  const targetNode = target() || window
  const handleScroll = () => {
    setVisible(window.scrollY >= visibilityHeight)
  }

  useEffect(() => {
    const scroll = throttle(handleScroll, 40)
    targetNode.addEventListener('scroll', scroll)
    return () => {
      targetNode.removeEventListener('scroll', scroll)
    }
  }, [])

  const classes = cx(prefixCls, className)
  const backTopNode = (
    <div className={classes} style={style} onClick={handleScrollTo(props, targetNode)}>
      {renderChildren(props, children)}
    </div>
  )

  // 小于0 默认一直显示 解决<Animate>单侧不通过问题
  if (visibilityHeight < 0) {
    return backTopNode
  }

  return (
    <Animate component="" transitionName="fade">
      {visible ? backTopNode : null}
    </Animate>
  )
}

BackTop.defaultProps = defaultProps

export default BackTop
