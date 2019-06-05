
import Button from '../components/Button';
import Icon from '../components/Icon';

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
        name: 'button 按钮',
        path: '/button',
        component: Button,
      }, {
        key: '图标',
        name: 'icon 图标',
        path: '/icon',
        component: Icon,
      }
    ]
  }
]

export default route;
