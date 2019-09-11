import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import * as actions from '../reducers/store/produto-actions';

@Injectable()
export class ProdutoStoreService {

  // tasks$: Observable<any[]>;
  produtos$: Observable<any[]>;

  constructor(
    private store: Store<any>
  ) {
    // this.tasks$ = store.select('produtos') as Observable<any[]>;
    // console.log('passei no TasksStoreService');
    // this.store.dispatch(new actions.LoadAction());
  }

  loadProdutosExclusivos(): Observable<any[]> {
    this.produtos$ = this.store.select('produtos') as Observable<any[]>;
    console.log('passei no createTask', this.store.select('produtos'));
    this.store.dispatch(new actions.LoadProdutosExclusivoAction());
    return this.produtos$;
  }

  loadProdutos(): Observable<any[]> {
    this.produtos$ = this.store.select('produtos') as Observable<any[]>;
    this.store.dispatch(new actions.LoadProdutoAction());
    return this.produtos$;
  }
}
