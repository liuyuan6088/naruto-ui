import * as React from 'react'
import { render } from 'enzyme'
import Affix from '../index'

describe('render affix', () => {
  it('render default', () => {
    const wrapper = render(<Affix offsetTop={0}>Follow</Affix>)
    expect(wrapper).toMatchSnapshot()
  })
})
