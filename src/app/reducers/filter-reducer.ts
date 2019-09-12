import { ActionReducer } from '@ngrx/store';
import { ProdutoAction, ActionTypes } from './store/produto-actions';

export const filterReducer: ActionReducer<any> = (
  state: any[] = [], action: ProdutoAction) => {

  switch (action.type) {

    case ActionTypes.SEARCH:
      return action.payload;

    default:
      return state;
  }
};

export function reduce(state: any[] = [], action: ProdutoAction) {
  return filterReducer(state, action);
}
