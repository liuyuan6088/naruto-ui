import * as React from 'react'
import { PrismCode } from 'react-prism'
import './creatPrism'
import './index.less'

const PageCode: React.FC = ({ children }) => (
  <div className="code">
    <pre>
      <PrismCode className="language-jsx">{children}</PrismCode>
    </pre>
  </div>
)

export default PageCode;
