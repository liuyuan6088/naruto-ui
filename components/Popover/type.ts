
import { PlacementType, ICommonSubgroupProps } from '../Portal/type'

export interface IPopoverProps extends ICommonSubgroupProps {
  // 弹出方向
  placement?: PlacementType;
  // 卡片标题
  title?: React.ReactNode;
  // 卡片内容
  content?: React.ReactNode;
}