import * as React from 'react'
import { render } from 'react-testing-library'
import Button from '../index'

describe('render button', () => {
  it('render default', () => {
    const wrapper = render(<Button />)
    expect(wrapper.container).toMatchSnapshot()
  })
  it('render button with children', () => {
    const childrenBtn = render(<Button>确认</Button>)
    expect(childrenBtn.container).toMatchSnapshot()
  })
})
