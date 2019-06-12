import * as React from 'react'
import { render } from 'enzyme'
import Spin from '../index'

describe('render Spin', () => {
  it('render Spin with size', () => {
    const node = (
      <div className="demo-spin-1">
        <Spin size="small" />
        <Spin />
        <Spin size="large" />
      </div>
    )
    const wrapper = render(node)
    expect(wrapper).toMatchSnapshot()
  })

  it("should render custom indicator when it's set", () => {
    const customIndicator = <div className="custom-indicator" />
    const wrapper = render(<Spin indicator={customIndicator} />)
    expect(wrapper).toMatchSnapshot()
  })
})
