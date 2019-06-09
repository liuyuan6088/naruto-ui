import * as React from 'react'
import { render } from 'enzyme'
import Breadcrumb from '../index'
import Icon from '../../Icon'

describe('render breadcrumb', () => {
  const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {})

  afterEach(() => {
    errorSpy.mockReset()
  })

  afterAll(() => {
    // @ts-ignore
    errorSpy.mockRestore()
  })

  it('render default', () => {
    const wrapper = render(
      <Breadcrumb>
        <Breadcrumb.Item>xxx</Breadcrumb.Item>
        <Breadcrumb.Item>yyy</Breadcrumb.Item>
      </Breadcrumb>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('render allow Breadcrumb.Item', () => {
    const wrapper = render(
      <Breadcrumb separator=">">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Application Center</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item href="">
          <Icon type="user" />
          <span>Application List</span>
        </Breadcrumb.Item>
      </Breadcrumb>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('should allow Breadcrumb.Item is null or undefined', () => {
    const wrapper = render(
      <Breadcrumb>
        {null}
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        {undefined}
      </Breadcrumb>
    )
    expect(errorSpy).not.toHaveBeenCalled()
    expect(wrapper).toMatchSnapshot()
  })
})
