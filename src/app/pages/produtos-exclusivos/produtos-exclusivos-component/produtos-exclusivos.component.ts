import { OnInit, Component } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { map, startWith, switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
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

  public searchInputChange$ = new Subject<any>();
  public contents$: Observable<string>;

  constructor(
    private appService: AppService,
    private produtoStoreService: ProdutoStoreService,
    private store: Store<any>
  ) {
    this.searchInputChange$
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((text: string) => of(text)))
      .subscribe((text: string) => {
        this.store.dispatch(new actions.SearchAction(text));
      });
    this.contents$ = this.store.pipe(select('filter'));
  }

  ngOnInit() {
    this.filter = new FormControl('');
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
    this.filteredProdutos$.pipe(map(response => {
      return response.filter(produto => {
        if (produto.id === id) {
          produto.favorito = checked;
        }
        return produto;
      });
    })
    ).subscribe(
      response => {
        return new actions.LoadProdutoCompletedAction({ produtos: response });
      }
    );
  }
}
