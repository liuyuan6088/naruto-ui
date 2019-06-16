import * as React from 'react';
import IMG from '../assets'
import './index.less';

const prefixCls = `header`;

// const handleColorPicker = () => {
//   // @ts-ignore
//   window.less.modifyVars({
//     '@primary-color': 'red'
//   })
// }

const Header: React.FC = () => {
  return (
    <div className={prefixCls}>
      <div className={`${prefixCls}-left`}>
        <img className={`${prefixCls}-logo`} src={IMG.LOGO} alt=""/>
        <div className={`${prefixCls}-desc`}>Naruto</div>
      </div>
      <div className={`${prefixCls}-right`}>
        <div className={`${prefixCls}-picker`}>
          {/* <div className={`${prefixCls}-picker-btn`} onClick={handleColorPicker} >

          </div> */}
        </div>
      </div>
    </div>
    )
}

export default Header;
