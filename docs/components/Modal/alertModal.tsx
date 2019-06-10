import * as React from 'react'
import Modal from 'components/Modal/index'
import { Button } from 'components'

const confirm = Modal.confirm
const success = Modal.success
const info = Modal.info
const error = Modal.error
const warning = Modal.warning

const Alert: React.FC = () => {
  const closeRef = React.useRef<any>()
  return (
    <React.Fragment>
      <p>快捷调用</p>
      <Button
        onClick={() => {
          closeRef.current = confirm({
            content: 'confirm内容区',
            title: 'Do you Want to delete these items?'
          })
        }}
      >
        confirm
      </Button>
      <Button
        type='primary'
        onClick={() => info({ content: 'info内容区', title: 'Do you Want to delete these items?' })}
        style={{ marginLeft: 20 }}
      >
        info
      </Button>
      <Button
        type='dashed'
        onClick={() =>
          success({ content: 'success内容区', title: 'Do you Want to delete these items?' })
        }
        style={{ marginLeft: 20 }}
      >
        success
      </Button>
      <Button
        type='danger'
        onClick={() =>
          error({ content: 'error内容区', title: 'Do you Want to delete these items?' })
        }
        style={{ marginLeft: 20 }}
      >
        error
      </Button>
      <Button
        type='default'
        onClick={() =>
          warning({ content: 'warning内容区', title: 'Do you Want to delete these items?' })
        }
        style={{ marginLeft: 20 }}
      >
        warning
      </Button>
    </React.Fragment>
  )
}

export default Alert;
