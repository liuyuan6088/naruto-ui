
import { ICommonProps } from '../utils/type';

export interface Route {
  path: string;
  breadcrumbName: string;
}

export interface IBreadcrumbItemProps {
  // 分隔符自定义
  separator?: string | React.ReactNode;
  // 类名前缀
  prefixCls?: string;
  // 链接的目的地
  href?: string;
  // 单击事件
  onClick?: (e: any)=>void;
  // 是否最后一个
  isLast?: boolean;
}

export interface IBreadcrumbProps extends ICommonProps {
  // router 的路由栈信息
  routes?: Route[];
  //  路由的参数
  params?: object;
  // 分隔符自定义
  separator?: string | React.ReactNode;
  // 自定义链接函数
  itemRender?: (
    route: any,
    params: any,
    routes: Array<any>,
    paths: Array<string>,
  ) => React.ReactNode;
}