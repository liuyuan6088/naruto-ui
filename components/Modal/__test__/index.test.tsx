import * as React from 'react'
import { mount } from 'enzyme'
import Modal from '../index'
import { IModalProps } from '../type'

const { useState, useEffect } = React

const Demo: React.FC<IModalProps> = props => {
  const [visible1, setVisible1] = useState<boolean>(false)

  useEffect(() => {
    setVisible1(true)
  }, [])

  return (
    <React.Fragment>
      <p>最简单的用法</p>
      <div className="demo-modal">
        <Modal visible={visible1} title="modal title" {...props}>
          modal content
        </Modal>
      </div>
    </React.Fragment>
  )
}

describe('render modal', () => {
  it('render correctly', () => {
    const wrapper = mount(<Demo />)
    expect(wrapper.render()).toMatchSnapshot()
  })

  it('render without footer', () => {
    const wrapper = mount(<Demo footer={null} />)
    expect(wrapper.render()).toMatchSnapshot()
  })
})
