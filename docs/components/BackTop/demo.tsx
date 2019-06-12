import * as React from 'react';
import { BackTop } from 'components';

const Demo: React.FC = () => {

  return (
    <React.Fragment>

      <p>简单使用</p>
      <p>可以自定义回到顶部按钮的样式</p>
      <p>有默认样式，距离底部 50px，可覆盖</p>
      <BackTop visibilityHeight={100} />
      <BackTop visibilityHeight={100} style={{ bottom: 100 }}>UP</BackTop>
    </React.Fragment>
  )
}

export default Demo;
