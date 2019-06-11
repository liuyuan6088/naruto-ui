import * as React from 'react';
import { Avatar, Button } from 'components';
import './index.less';

const { useState } = React;

const userList = ['U', 'Lucy', 'Tom', 'Edward'];
const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

const Demo: React.FC = () => {

  const [color, setColor] = useState<string>(colorList[0]);
  const [user, setUser] = useState<string>(userList[0]);

  const changeUser = () => {
    const index = userList.indexOf(user);
    setUser(index < userList.length - 1 ? userList[index + 1] : userList[0]);
    setColor(index < colorList.length - 1 ? colorList[index + 1] : colorList[0]);
  }

  return (
    <React.Fragment>

      <p>头像有三种尺寸, 有两种形状可选</p>
      <div className='demo-avatar'>
        <Avatar size={80} icon='user'>dada</Avatar>
        <Avatar size='large' icon='user'>dada</Avatar>
        <Avatar icon='user'>dada</Avatar>
        <Avatar size='small' icon='user'>dada</Avatar>

        <Avatar shape='square' size={80} icon='user'>dada</Avatar>
        <Avatar shape='square' size='large' icon='user'>dada</Avatar>
        <Avatar shape='square' icon='user'>dada</Avatar>
        <Avatar shape='square' size='small' icon='user'>dada</Avatar>
      </div>

      <p>支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色</p>
      <div className='demo-avatar'>
        <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'>dada</Avatar>
        <Avatar>dada</Avatar>
        <Avatar icon='user'>dada</Avatar>
        <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
        <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
      </div>

      <p>自动调整字符大小</p>
      <div>
        <Avatar style={{ backgroundColor: color, verticalAlign: 'middle' }} size="large">
          {user}
        </Avatar>
        <Button
          size="small"
          style={{ marginLeft: 16, verticalAlign: 'middle' }}
          onClick={changeUser}
        >
          Change
        </Button>
      </div>

    </React.Fragment>
  )
}

export default Demo;
