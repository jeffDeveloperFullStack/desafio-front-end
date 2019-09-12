import { ActionReducer } from '@ngrx/store';
import { ProdutoAction, ActionTypes } from './produto-actions';

export const produtoReducer: ActionReducer<any> = (
  state: any[] = [], action: ProdutoAction) => {

  switch (action.type) {

    case ActionTypes.LOAD_COMPLETED:
      return [...state, ...action.payload.produtos];

    case ActionTypes.LOAD_PRODUTOS_COMPLETED:
      return [...state, ...action.payload.produtos];

    default:
      return state;
  }
};

export function reduce(state: any[] = [], action: ProdutoAction) {
  return produtoReducer(state, action);
}

