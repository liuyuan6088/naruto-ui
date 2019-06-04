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
})
