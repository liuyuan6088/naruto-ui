import * as React from 'react'
import { INotificationProps } from './type'
import cx from 'classnames'
import Notice from './Notices'
import Animate from 'rc-animate'
import { primaryName } from '../utils/constant'
import './style/index.less'

const defaultPrefixCls = `${primaryName}-notification`

const defaultProps: INotificationProps = {
  transitionName: 'fade',
  notices: [],
  duration: 3,
  top: 24
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
    style
  } = props

  const classes = cx(defaultPrefixCls, className)
  const styles = { top }

  const noticeNodes = notices.map(notice => {
    return (
      <Notice
        prefixCls={prefixCls}
        duration={duration}
        closeIcon={closeIcon}
        key={notice.key}
        {...notice}
        autoClose={() => deleteNotice(notice.key)}
      >
        {notice.content}
      </Notice>
    )
  })

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
