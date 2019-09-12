import { Action } from '@ngrx/store';
import { type } from './../../ngrx/util';

export const ActionTypes = {
  // LOAD: type('[Produtos] -LOAD Requested-'),
  LOAD_PRODUTOS: type('[Produtos] - LOAD Requested'),
  LOAD_COMPLETED: type('[Produtos] -LOAD Completed'),
  LOAD_PRODUTOS_COMPLETED: type('[Produtos] - LOAD Completed'),
  LOAD_ERROR: type('[Produtos] -LOAD Error-'),
  LOAD_PRODUTOS_ERROR: type('[Produtos] - LOAD Error'),
  LOAD_SUCCESS: type('[Search] - Load Success'),
  LOAD_PRODUTO_SUCCESS: type('[Search] - Load Produto Success'),
  SEARCH: type('[Search] - Search'),
  LOAD: type('[Search] - Load')
};

export class LoadCompletedAction implements Action {
  type = ActionTypes.LOAD_COMPLETED;
  constructor(public payload: any) { }
}

export class LoadProdutoAction implements Action {
  type = ActionTypes.LOAD_PRODUTOS;
  constructor(public payload: any = []) { }
}

export class LoadProdutoCompletedAction implements Action {
  type = ActionTypes.LOAD_PRODUTOS_COMPLETED;
  constructor(public payload: any) { }
}

export class LoadProdutoErrorAction implements Action {
  type = ActionTypes.LOAD_PRODUTOS_ERROR;
  constructor(public payload: string) { }
}

export class LoadErrorAction implements Action {
  type = ActionTypes.LOAD_ERROR;
  constructor(public payload: string) { }
}

export class LoadActionSuccess implements Action {
  type = ActionTypes.LOAD_SUCCESS;
  constructor(public payload: any = []) { }
}

export class LoadProdutoSuccess implements Action {
  type = ActionTypes.LOAD_PRODUTO_SUCCESS;
  constructor(public payload: any = []) { }
}

export class SearchAction implements Action {
  type = ActionTypes.SEARCH;
  constructor(public payload: string) { }
}

export class LoadAction implements Action {
  type = ActionTypes.LOAD;
  constructor() { }
}


export type ProdutoAction
  = LoadAction
  | LoadCompletedAction
  | LoadErrorAction
  | LoadProdutoAction
  | LoadProdutoCompletedAction
  | LoadAction
  | LoadActionSuccess
  | SearchAction
  | LoadProdutoSuccess;
