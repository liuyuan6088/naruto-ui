import * as React from 'react'
import Portal from '../Portal'
import { ITooltipProps } from './type'
import { primaryName } from '../utils/constant'
import './style/index.less'

const { useState } = React

const defaultProps: ITooltipProps = {
  prefixCls: `${primaryName}-tooltip`
}

const Tooltip: React.FC<ITooltipProps> = props => {
  const { prefixCls } = props

  const [visible, setVisible] = useState<boolean>(false)

  return (
    <div>
      <Portal prefixCls={`${prefixCls}`} visible={visible} content={<div>111111</div>}>
        <span onClick={() => setVisible(e => !e)}>dddd</span>
      </Portal>
    </div>
  )
}

Tooltip.defaultProps = defaultProps

export default Tooltip
