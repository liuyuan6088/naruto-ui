import * as React from 'react';
import { Breadcrumb } from 'components';
import { Icon } from 'components';
import './index.less';

const routes = [
  {
    path: 'index',
    breadcrumbName: 'home',
  },
  {
    path: 'first/:a',
    breadcrumbName: 'first',
    children: [
      {
        path: '/general',
        breadcrumbName: 'General',
      },
      {
        path: '/layout',
        breadcrumbName: 'Layout',
      },
      {
        path: '/navigation',
        breadcrumbName: 'Navigation',
      },
    ],
  },
  {
    path: 'second',
    breadcrumbName: 'second',
  },
];


const Demo: React.FC = () => {
  return (
    <React.Fragment>
      <p>最简单的用法</p>
      <div className='demo-box'>
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Application Center</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Application List</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <p>使用 separator=">" 可以自定义分隔符</p>
      <div className='demo-box'>
        <Breadcrumb separator='>'>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Application Center</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item href="">
            <Icon type="user" />
            <span>Application List</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <p>图标放在文字前面</p>
      <div className='demo-box'>
        <Breadcrumb separator='>'>
          <Breadcrumb.Item>
          <Icon type="user" />
            <a href="">Application Center</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item href="">
            <Icon type="user" />
            <span>Application List</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <p>和 react-router，或其他路由进行结合使用。</p>
      <div className='demo-box'>
        <Breadcrumb routes={routes} />
      </div>

    </React.Fragment>
  )
}

export default Demo;
