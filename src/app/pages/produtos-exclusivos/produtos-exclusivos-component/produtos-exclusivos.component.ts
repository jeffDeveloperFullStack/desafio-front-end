import { OnInit, Component } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { map, startWith, switchMap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Observable, combineLatest, of, Subject } from 'rxjs';

import { ProdutoStoreService } from 'src/app/services/produto-store.service';
import { Store, select } from '@ngrx/store';
import * as actions from '../../../reducers/store/produto-actions';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'produtos-exclusivos',
  templateUrl: './produtos-exclusivos.component.html',
  styleUrls: ['./produtos-exclusivos.component.scss'],
})
export class ProdutosExclusivosComponent implements OnInit {

  public filter: FormControl;
  public filter$: Observable<string>;
  public produtos$: Observable<any>;
  public filteredProdutos$: Observable<any>;

  produtosExclusivos$: Observable<any[]>;


  searchInputChange$ = new Subject<any>();
  contents$: Observable<string>;

  constructor(
    private appService: AppService,
    private produtoStoreService: ProdutoStoreService,
    private store: Store<any>
  ) {
    this.searchInputChange$
      .pipe(switchMap((text: string) => of(text)))
      .subscribe((text: string) => {
        this.store.dispatch(new actions.SearchAction(text));
      });
    this.contents$ = this.store.pipe(select('filter'));
  }

  ngOnInit() {
    this.filter = new FormControl('');

    // this.produtos$ = this.store.pipe(select('produtos')).pipe(map(
    //   data => data.filter(produto => produto.exclusivo === true)
    // ));

    // this.produtos$.subscribe(
    //   response => {
    //     // this.produtosExclusivos$ = of(response);
    //     // this.filter$ = this.filter.valueChanges.pipe(startWith(''));
    //     // this.filteredProdutos$ = combineLatest(this.produtos$, this.filter$).pipe(
    //     //   map(
    //     //     // tslint:disable-next-line: max-line-length
    //     //     ([produtos, filterString]) => produtos.filter(produto => produto.nome.toLowerCase().indexOf(filterString.toLowerCase()) !== -1)
    //     //   )
    //     // );
    //   }
    // );
    // this.produtosExclusivos$ = this.store.pipe(select('produtos'));
    this.store.pipe(select('produtos')).pipe(
      map(
        data => data.filter(produto => produto.exclusivo === true)
      )
    ).subscribe(
      response => {
        this.produtos$ = of(response);
        this.filter$ = this.contents$.pipe(startWith(''));
        // this.filter$ = this.filter.valueChanges.pipe(startWith(''));
        this.filteredProdutos$ = combineLatest(this.produtos$, this.filter$).pipe(
          map(
            ([produtos, filterString]) => produtos.filter(
              produto => produto.nome.toLowerCase().indexOf(Array.isArray(filterString) ? '' : filterString.toLowerCase()) !== -1
            )
          )
        );
      }
    );
  }

  public onFavorito(id, checked) {
    console.log(id);
    console.log(checked);
  }
}
