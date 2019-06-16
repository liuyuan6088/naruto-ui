import * as React from 'react';
// import IMG from '../../assets'
import './index.less';

const prefixCls = `introduce`;

const Introduce: React.FC = () => {
  const aNode = <a href='https://ant.design/index-cn' target='_blank'>Ant Design</a>;
  return (
    <div className={`${prefixCls}`}>
      <div className={`${prefixCls}-content`}>
        <p>Naruto-ui</p>
        <ul className={`${prefixCls}-desc`}>
          <li>Naruto-ui 是基于 react+ts+hooks 的一个UI组件</li>
          <li>开发目的主要是学习提升 react-hooks，组件开发等技能，用于个人学习</li>
          <li>组件设计主要参考 {aNode}，用hooks实现Ant Design组件</li>
        </ul>
        <p>特性</p>
        <ul className={`${prefixCls}-desc`}>
          <li>1. 组件都使用 hooks+typescript 实现</li>
          <li>2. 组件风格和 API 设计参考 {aNode}</li>
        </ul>
      </div>
      
      {/* <img className={`${prefixCls}-img ${prefixCls}-img-left`} src={IMG.INTRODUCE_LEFT} alt=""/>
      <img className={`${prefixCls}-img ${prefixCls}-img-right`} src={IMG.INTRODUCE_RIGHT} alt=""/> */}
    </div>
  )
}

export default Introduce;
