import * as React from 'react';
import { Button } from 'components';
import './index.less';

const ButtonGroup = Button.Group;

const Group: React.FC = () => {

  return (
    <React.Fragment>

      <p id="screens">按钮组合</p>
      <div className='button-box'>
        <ButtonGroup>
          {['left', 'mid', 'right'].map((e) => (
            <Button
              key={e}
              type='primary'
            >
              {e}
            </Button>
          ))}
        </ButtonGroup>

        <ButtonGroup>
          {['lg', 'nm', 'sm'].map((e) => (
            <Button
              key={e}
            >
              {e}
            </Button>
          ))}
        </ButtonGroup>
      </div>

      
    </React.Fragment>
  )
}

export default Group;
