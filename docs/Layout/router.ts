
import Button from '../components/Button';
import Icon from '../components/Icon';
import Affix from '../components/Affix';
import Breadcrumb from '../components/Breadcrumb';
import Modal from '../components/Modal';
import Avatar from '../components/Avatar';
import Spin from '../components/Spin';

export type RouteItem =  {
  key: string,
  name: string,
  path: string,
  component: () => JSX.Element;
}

export type RouteConfig = Array<{
  title?: string,
  route: RouteItem[],
}>;

const route: RouteConfig = [
  {
    title: '通用',
    route: [
      {
        key: '按钮',
        name: 'Button 按钮',
        path: '/button',
        component: Button,
      }, {
        key: '图标',
        name: 'Icon 图标',
        path: '/icon',
        component: Icon,
      }
    ]
  }, {
    title: '导航',
    route: [
      {
        key: '固钉',
        name: 'Affix 固钉',
        path: '/affix',
        component: Affix,
      }, {
        key: '面包屑',
        name: 'Breadcrumb 面包屑',
        path: '/breadcrumb',
        component: Breadcrumb,
      }
    ],
  }, {
    title: '反馈',
    route: [
      {
        key: '对话框',
        name: 'Modal 对话框',
        path: '/modal',
        component: Modal,
      }, {
        key: '加载中',
        name: 'Spin 加载中',
        path: '/spin',
        component: Spin,
      }
    ],
  }, {
    title: '数据展示',
    route: [
      {
        key: '头像',
        name: 'Avatar 头像',
        path: '/avatar',
        component: Avatar,
      }
    ],
  }
]

export default route;
