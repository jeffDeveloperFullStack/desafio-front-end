import { Action } from '@ngrx/store';
import { type } from './../../ngrx/util';

export const ActionTypes = {
  LOAD: type('[Produtos] -LOAD Requested-'),
  LOAD_COMPLETED: type('[Produtos] -LOAD Completed-'),
  LOAD_ERROR: type('[Produtos] -LOAD Error-')
};

export class LoadAction implements Action {
  type = ActionTypes.LOAD;
  constructor(public payload: any = []) { }
}

export class LoadCompletedAction implements Action {
  type = ActionTypes.LOAD_COMPLETED;
  constructor(public payload: any) { }
}

export class LoadErrorAction implements Action {
  type = ActionTypes.LOAD_ERROR;
  constructor(public payload: string) { }
}

export type ProdutoAction
  = LoadAction
  | LoadCompletedAction
  | LoadErrorAction;
