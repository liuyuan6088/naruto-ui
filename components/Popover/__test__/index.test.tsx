import * as React from 'react'
import { mount } from 'enzyme'
import Popover from '../index'

describe('Popover', () => {
  it('render Popover', () => {
    const wrapper = mount(
      <Popover title="" content="" transitionName="" mouseEnterDelay={0} mouseLeaveDelay={0}>
        <div id="hello">Hello world!</div>
      </Popover>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
