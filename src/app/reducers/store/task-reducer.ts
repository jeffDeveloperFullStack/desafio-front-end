import { Action, ActionReducer } from '@ngrx/store';
import { ProdutoAction, ActionTypes } from './produto-actions';

export const taskReducer: ActionReducer<any[]> = (
  state: any[] = [], action: ProdutoAction) => {

  switch (action.type) {

    case ActionTypes.LOAD_COMPLETED:
      return [...state, ...action.payload.produtos];

    default:
      return state;
  }
};
