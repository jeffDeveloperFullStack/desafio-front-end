import { Action } from '@ngrx/store';
import { type } from './../../ngrx/util';

export const ActionTypes = {
  // LOAD: type('[Produtos] -LOAD Requested-'),
  LOAD_PRODUTOS: type('[Produtos] - LOAD Requested'),
  LOAD_PRODUTOS_EXCLUSIVOS: type('[Produtos-Exclusivos] -LOAD Requested-'),
  LOAD_PRODUTOS_EXCLUSIVOS_COMPLETO: type('[Produtos-Exclusivos] -LOAD Requested- Completo'),
  LOAD_COMPLETED: type('[Produtos] -LOAD Completed'),
  LOAD_PRODUTOS_COMPLETED: type('[Produtos] - LOAD Completed'),
  LOAD_ERROR: type('[Produtos] -LOAD Error-'),
  LOAD_PRODUTOS_ERROR: type('[Produtos] - LOAD Error'),
  LOAD_SUCCESS: type('[Search] - Load Success'),
  LOAD_PRODUTO_SUCCESS: type('[Search] - Load Produto Success'),
  SEARCH: type('[Search] - Search'),
  LOAD: type('[Search] - Load')
};

// export class LoadAction implements Action {
//   type = ActionTypes.LOAD;
//   constructor(public payload: any = []) { }
// }

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

export class LoadProdutosExclusivoAction implements Action {
  type = ActionTypes.LOAD_PRODUTOS_EXCLUSIVOS;
  constructor(readonly payload: any = []) { }
}

export class LoadProdutosExclusivoCompletoAction implements Action {
  type = ActionTypes.LOAD_PRODUTOS_EXCLUSIVOS_COMPLETO;
  constructor(readonly payload: any = []) { }
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
  | LoadProdutosExclusivoAction
  | LoadProdutosExclusivoCompletoAction
  | LoadProdutoAction
  | LoadProdutoCompletedAction
  | LoadAction
  | LoadActionSuccess
  | SearchAction
  | LoadProdutoSuccess;
