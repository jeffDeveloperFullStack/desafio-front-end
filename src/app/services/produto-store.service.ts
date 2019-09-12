import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import * as actions from '../reducers/store/produto-actions';

@Injectable()
export class ProdutoStoreService {

  produtos$: Observable<any[]>;

  constructor(
    private store: Store<any>
  ) { }

  loadProdutos(): Observable<any[]> {
    this.produtos$ = this.store.select('produtos') as Observable<any[]>;
    this.store.dispatch(new actions.LoadProdutoAction());
    return this.produtos$;
  }
}
