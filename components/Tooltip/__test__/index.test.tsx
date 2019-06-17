import * as React from 'react'
import { mount } from 'enzyme'
import Tooltip from '../index'

describe('Tooltip', () => {
  it('render Tooltip', () => {
    const wrapper = mount(
      <Tooltip title="" transitionName="" mouseEnterDelay={0} mouseLeaveDelay={0}>
        <div id="hello">Hello world!</div>
      </Tooltip>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('Tooltip title is empty', () => {
    const onVisibleChange = jest.fn()

    const wrapper = mount(
      <Tooltip
        title=""
        transitionName=""
        mouseEnterDelay={0}
        mouseLeaveDelay={0}
        onVisibleChange={onVisibleChange}
      >
        <div id="hello">Hello world!</div>
      </Tooltip>
    )

    const div = wrapper.find('#hello').at(0)
    div.simulate('mouseenter')
    expect(onVisibleChange).not.toHaveBeenCalled()
  })
})
