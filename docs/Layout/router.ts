
import Button from '../components/Button';
import Icon from '../components/Icon';
import Affix from '../components/Affix';

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
      },
    ],
  }
]

export default route;
