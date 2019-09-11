import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../counter.actions';
import { ProdutoStoreService } from '../services/produto-store.service';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
})
export class MyCounterComponent implements OnInit {
  count$: Observable<number>;

  tasks$: Observable<any[]>;
  produtos$: Observable<any[]>;

  constructor(
    private produtoStoreService: ProdutoStoreService,
    private store: Store<{ count: number }>
  ) {
    // this.tasks$ = this.produtoStoreService.tasks$;
    // this.tasks$.subscribe(
    //   response => {
    //     console.log('response', response);
    //   }
    // );
    this.count$ = store.pipe(select('count'));

    // this.produtos$ = this.produtoStoreService.loadProdutosExclusivos();
  }

  ngOnInit() {

  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

}
