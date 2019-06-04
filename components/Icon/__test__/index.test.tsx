import * as React from 'react'
import { render } from 'enzyme'
import Icon from '../index'

describe('render Icon', () => {
  it('render Icon has types', () => {
    const wrapper = render(
      <div>
        <Icon type="stop" />
        <Icon type="fire" spin />
        <Icon type="loading" />
      </div>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('render Icon with other icon', () => {
    const scriptUrl = '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'
    const MyIcon = Icon.createFromIconfontCN({
      scriptUrl
    })
    const wrapper = render(
      <div className="icons-list">
        <MyIcon type="icon-tuichu" />
        <MyIcon type="icon-facebook" />
        <MyIcon type="icon-twitter" />
      </div>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
