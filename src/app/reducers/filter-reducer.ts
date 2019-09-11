import { Action, ActionReducer } from '@ngrx/store';
import { ProdutoAction, ActionTypes } from './store/produto-actions';
import { isEmpty } from 'rxjs/operators';

export const filterReducer: ActionReducer<any> = (
  state: any[] = [], action: ProdutoAction) => {

  switch (action.type) {

    case ActionTypes.SEARCH:
      return action.payload;

    default:
      return state;
  }
};
