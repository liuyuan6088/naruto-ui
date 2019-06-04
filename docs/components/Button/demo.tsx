import * as React from 'react';
import { Button } from 'components';

const ButtonGroup = Button.Group;

const ButtonDemo: React.FC = () => {

  const handleClick = (e: React.MouseEvent) => {
    console.log(e);
  }

  return (
    <React.Fragment>
      <Button>Default</Button>
      <Button type='primary'>Primary</Button>
      <Button type='dashed'>Dashed</Button>
      <Button type='danger'>Danger</Button>

      <Button type='primary' size='large'>Primary</Button>
      <Button type='primary' size='small'>Primary</Button>

      <Button type='primary' disabled={true}>Primary</Button>
      <Button type='primary' block={true}>Primary</Button>

      <Button type='primary' onClick={handleClick}>Primary</Button>

      <Button href='http://www.baidu.com'>aaa</Button>

      <Button type='primary' loading>Primary</Button>

      <ButtonGroup>
        {['left', 'mid', 'right'].map((e) => <Button
          key={e}
          type='primary'
          onClick={data => {
            console.log(data);
          }}
        >{e}</Button>)}
      </ButtonGroup>
    </React.Fragment>
  )
}

export default ButtonDemo;
