
import { Properties, Params } from '../n-notification/type'

export interface Config extends Properties {
}

export interface Notice extends Params {
}

export interface NoticeRes {
  (): void;
  then?(filled: ThenableArgument, rejected?: ThenableArgument): Promise<{}>;
  promise?: Promise<{}>;
}

export interface ThenableArgument {
  (_: any): any;
}
