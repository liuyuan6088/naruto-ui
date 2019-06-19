
import { PlacementType, ICommonSubgroupProps } from '../Portal/type'

export interface ITooltipProps extends ICommonSubgroupProps {
  // 提示文字
  title: React.ReactNode;
  // 弹出方向
  placement?: PlacementType;
}