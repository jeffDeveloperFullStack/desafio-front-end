import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';

import * as produtoActions from './produto-actions';
import { AppService } from 'src/app/app.service';
import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class ProdutoEffects {

  constructor(
    private api: AppService,
    private actions$: Actions
  ) { }

  @Effect()
  loadProdutosAction$: Observable<Action> = this.actions$
    .pipe(
      ofType(produtoActions.ActionTypes.LOAD_PRODUTOS),
      switchMap(() => this.api.loadProdutos()),
      map((res: any) => new produtoActions.LoadProdutoCompletedAction({ produtos: res.produtos })),
      catchError(() => of({ type: produtoActions.ActionTypes.LOAD_ERROR }))
    );

  @Effect() load$ = this.actions$
    .pipe(
      ofType(produtoActions.ActionTypes.SEARCH),
      map(action => action),
      map(action => new produtoActions.LoadActionSuccess({ filter: action }))
    );
}
