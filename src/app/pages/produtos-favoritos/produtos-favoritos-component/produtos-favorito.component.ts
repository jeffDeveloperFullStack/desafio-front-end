import { OnInit, Component } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { FormControl } from '@angular/forms';
import { Observable, of, combineLatest, Subject } from 'rxjs';
import { startWith, map, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

import * as actions from '../../../reducers/store/produto-actions';
import { ProdutoStoreService } from 'src/app/services/produto-store.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'produtos-favoritos',
  templateUrl: './produtos-favoritos.component.html',
  styleUrls: ['./produtos-favoritos.component.scss'],
})
export class ProdutosFavoritosComponent implements OnInit {

  public filter: FormControl;
  public filter$: Observable<string>;
  public produtos$: Observable<any>;
  public filteredProdutos$: Observable<any>;

  public boolscroll = false;

  public searchInputChange$ = new Subject<any>();
  public contents$: Observable<string>;

  constructor(
    private produtoStoreService: ProdutoStoreService,
    private appService: AppService,
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
        data => data.filter(produto => produto.favorito === true)
      )
    ).subscribe(
      response => {
        this.produtos$ = of(response);
        this.filter$ = this.contents$.pipe(startWith(''));
        // this.filter$ = this.filter.valueChanges.pipe(startWith(''));
        this.filteredProdutos$ = combineLatest(this.produtos$, this.filter$).pipe(
          map(
            ([produtos, filterString]) => produtos.filter(
              (produto: any) => {
                const descricao = produto.decricaoCurta.toLowerCase().indexOf(
                  Array.isArray(filterString) ? '' : filterString.toLowerCase()
                ) !== -1;
                const nome = produto.nome.toLowerCase().indexOf(
                  Array.isArray(filterString) ? '' : filterString.toLowerCase()
                ) !== -1;
                return (descricao || nome);
              })
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

  onScroll() {
    this.produtoStoreService.loadProdutos();
  }
}
