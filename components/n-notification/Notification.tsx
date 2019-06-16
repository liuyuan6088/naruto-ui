import * as React from 'react'
import { INotificationProps } from './type'
import cx from 'classnames'
import Notice from './Notices'
import Animate from 'rc-animate'
import { primaryName } from '../utils/constant'
import './style/index.less'

const defaultPrefixCls = `${primaryName}-information`

const defaultProps: INotificationProps = {
  transitionName: 'fade',
  notices: [],
  duration: 3,
  top: 24,
  style: {}
  // getContainer: () => document.body
}

const Notification: React.FC<INotificationProps> = props => {
  const {
    notices,
    prefixCls,
    className,
    transitionName,
    deleteNotice,
    duration,
    closeIcon,
    top,
    closable,
    style
  } = props

  const classes = cx(defaultPrefixCls, className)
  const styles = 'top' in style ? {} : { top }

  const noticeNodes = notices.map(notice => {
    const shouldUpdate = notice.key
    return (
      <Notice
        prefixCls={prefixCls}
        duration={duration}
        closeIcon={closeIcon}
        closable={closable}
        {...notice}
        key={shouldUpdate}
        autoClose={() => deleteNotice(notice.key)}
      >
        {notice.content}
      </Notice>
    )
  })

  // 没有动效
  if (transitionName === '') {
    return (
      <div style={{ ...styles, ...style }} className={classes}>
        {noticeNodes}
      </div>
    )
  }

  return (
    <div style={{ ...style, ...styles }} className={classes}>
      <Animate components="" transitionName={transitionName}>
        {noticeNodes}
      </Animate>
    </div>
  )
}

Notification.defaultProps = defaultProps

export default Notification
