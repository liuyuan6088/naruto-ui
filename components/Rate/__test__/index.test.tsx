import * as React from 'react'
import { render, mount } from 'enzyme'
import Rate from '../index'

describe('render Rate', () => {
  it('render Rate', () => {
    const wrapper = render(<Rate />)
    expect(wrapper).toMatchSnapshot()
  })

  it('render Rate with count', () => {
    const wrapper = mount(<Rate count={10} />)
    expect(wrapper.find('.naruto-rate-star').length).toBe(10)
  })
})
