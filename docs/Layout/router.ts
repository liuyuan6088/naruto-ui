import Introduce from '../Introduction/Introduce';
import Button from '../components/Button';
import Icon from '../components/Icon';
import Affix from '../components/Affix';
import Breadcrumb from '../components/Breadcrumb';
import Modal from '../components/Modal';
import Avatar from '../components/Avatar';
import Spin from '../components/Spin';
import BackTop from '../components/BackTop';
import Message from '../components/Message';
import Notification from '../components/Notification';
import Tooltip from '../components/Tooltip';
import Dropdown from '../components/Dropdown';

export const rootPath = '/naruto-ui'

export type RouteItem =  {
  key: string,
  name: string,
  path: string,
  component: (() => JSX.Element) | (React.FunctionComponent<{}>);
}

export type RouteConfig = Array<{
  title?: string,
  route: RouteItem[],
}>;

const route: RouteConfig = [
  {
    title: '入门',
    route: [
      {
        key: '介绍',
        name: '介绍',
        path: '/introduce',
        component: Introduce,
      },
    ]
  },
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
      }, {
        key: '回到顶部',
        name: 'BackTop 回到顶部',
        path: '/backTop',
        component: BackTop,
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
        key: '全局提示',
        name: 'Message 全局提示',
        path: '/message',
        component: Message,
      }, {
        key: '通知提醒框',
        name: 'Notification 通知提醒框',
        path: '/notification',
        component: Notification,
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
      }, {
        key: '文字提示',
        name: 'Tooltip 文字提示',
        path: '/tooltip',
        component: Tooltip,
      }, {
        key: '下拉框',
        name: 'Dropdown 下拉框',
        path: '/dropdown',
        component: Dropdown,
      }
    ],
  }
].map(e => ({
  ...e,
  route: (e as any ).route.map((ee: RouteItem) => ({
    ...ee,
    path: `${rootPath}${ee.path}`
  }))
}))

export default route;
