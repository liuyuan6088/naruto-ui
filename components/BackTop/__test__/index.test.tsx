import * as React from 'react'
import { render, mount } from 'enzyme'
import BackTop from '../index'

describe('render backTop', () => {
  it('render default', () => {
    const wrapper = render(<BackTop visibilityHeight={-1} />)
    expect(wrapper).toMatchSnapshot()
  })
})

describe('click BackTop', () => {
  it('should scroll to top after click it', async () => {
    const wrapper = mount(<BackTop visibilityHeight={-1} />)
    document.documentElement.scrollTop = 400
    wrapper.find('.naruto-backTop').simulate('click')
    await new Promise(resolve => setTimeout(resolve, 1000))
    expect(Math.abs(Math.round(document.documentElement.scrollTop))).toBe(0)
  })
})
