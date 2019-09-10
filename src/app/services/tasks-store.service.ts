import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import * as actions from '../reducers/store/produto-actions';

@Injectable()
export class TasksStoreService {

  tasks$: Observable<any[]>;

  constructor(
    private store: Store<any>
  ) {
    this.tasks$ = store.select('produtos') as Observable<any[]>;
    console.log('passei no TasksStoreService');
    this.store.dispatch(new actions.LoadAction());
  }
}
