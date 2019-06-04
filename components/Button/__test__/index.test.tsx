import * as React from 'react'
import { render, mount } from 'enzyme'
import Button from '../index'

describe('render button', () => {
  it('render default', () => {
    const wrapper = render(<Button>Follow</Button>)
    expect(wrapper).toMatchSnapshot()
  })

  it('render loading button', () => {
    const wrapper = render(<Button loading>loading</Button>)
    expect(wrapper).toMatchSnapshot()
  })

  it('render button with type-icon', () => {
    const wrapper = render(<Button icon="thunderbolt">霹雳</Button>)
    expect(wrapper).toMatchSnapshot()
  })
})

describe('onClick event', () => {
  // const fn = jest.fn();
  it('should change loading state instantly by default', () => {
    class DefaultButton extends React.Component {
      state = {
        loading: false
      }

      enterLoading = () => {
        this.setState({ loading: true })
      }

      render() {
        const { loading } = this.state
        return (
          <Button loading={loading} onClick={this.enterLoading}>
            Button
          </Button>
        )
      }
    }
    const wrapper = mount(<DefaultButton />)
    wrapper.simulate('click')
    expect(wrapper.find('.naruto-btn-loading').length).toBe(1)
  })
})
