import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';

import * as taskActions from './produto-actions';
import { AppService } from 'src/app/app.service';
import { switchMap, map, catchError, mergeMap } from 'rxjs/operators';

@Injectable()
export class ProdutoEffects {

  constructor(
    private api: AppService,
    private actions$: Actions
  ) { }

  // @Effect()
  // loadAction$: Observable<Action> = this.actions$
  //   .pipe(
  //     ofType(taskActions.ActionTypes.LOAD),
  //     switchMap(() => this.api.loadProdutos()),
  //     map((res: any) => new taskActions.LoadCompletedAction({ produtos: res.produtos })),
  //     catchError(() => of({ type: taskActions.ActionTypes.LOAD_ERROR }))
  //   );

  @Effect()
  loadProdutoExclusivoAction$: Observable<Action> = this.actions$
    .pipe(
      ofType(taskActions.ActionTypes.LOAD_PRODUTOS_EXCLUSIVOS),
      switchMap(() => this.api.loadProdutosExclusivos()),
      map(response => response.produtos.filter(produto => produto.exclusivo === true)),
      map(res => new taskActions.LoadProdutosExclusivoCompletoAction({ produtos: res })),
      catchError(() => of({ type: taskActions.ActionTypes.LOAD_ERROR }))
    );

  @Effect()
  loadProdutosAction$: Observable<Action> = this.actions$
    .pipe(
      ofType(taskActions.ActionTypes.LOAD_PRODUTOS),
      switchMap(() => this.api.loadProdutos()),
      map((res: any) => new taskActions.LoadProdutoCompletedAction({ produtos: res.produtos })),
      catchError(() => of({ type: taskActions.ActionTypes.LOAD_ERROR }))
    );

  @Effect() load$ = this.actions$
    .pipe(
      ofType(taskActions.ActionTypes.SEARCH),
      map(action => action),
      map(action => new taskActions.LoadActionSuccess({ filter: action }))
    );

}
