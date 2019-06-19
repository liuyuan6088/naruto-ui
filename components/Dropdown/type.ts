
import { ICommonSubgroupProps } from '../Portal/type'

export type DropdownPlacementType = 'bottomLeft'| 'bottom'| 'bottomRight'| 'topLeft'| 'top'| 'topRight'

export interface IDropdownProps extends ICommonSubgroupProps {
  // 菜单
  dropdown: React.ReactNode;
   // 弹出方向
  placement?: DropdownPlacementType;
}