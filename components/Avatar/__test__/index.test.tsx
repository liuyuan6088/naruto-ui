import * as React from 'react'
import { mount, render } from 'enzyme'
import Avatar from '../index'

describe('Render Avatar', () => {
  it('render default', () => {
    const wrapper = render(
      <div>
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <Avatar icon="user" />
        <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
        <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
      </div>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('Render long string correctly', () => {
    const wrapper = mount(<Avatar>TestString</Avatar>)
    const children = wrapper.find('.naruto-avatar-string')
    expect(children.length).toBe(1)
  })
})
