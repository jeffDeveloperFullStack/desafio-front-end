import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';

import * as taskActions from './produto-actions';
import { AppService } from 'src/app/app.service';
import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class TaskEffects {

  constructor(
    private api: AppService,
    private actions$: Actions
  ) { }

  @Effect()
  loadAction$: Observable<Action> = this.actions$
    .pipe(
      ofType(taskActions.ActionTypes.LOAD),
      switchMap(() => this.api.loadProdutos()),
      map((res: any) => new taskActions.LoadCompletedAction({ produtos: res.produtos })),
      catchError(() => of({ type: taskActions.ActionTypes.LOAD_ERROR }))
    );
}
