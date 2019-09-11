import { OnInit, Component } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { map, startWith, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { combineLatest, Observable, of, Subject } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import * as actions from '../../../reducers/store/produto-actions';


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'produtos-todos',
  templateUrl: './produtos-todos.component.html',
  styleUrls: ['./produtos-todos.component.scss'],
})
export class ProdutosTodosComponent implements OnInit {

  public filter: FormControl;
  public filter$: Observable<string>;
  public produtos$: Observable<any>;
  public filteredProdutos$: Observable<any>;

  public searchInputChange$ = new Subject<any>();
  public contents$: Observable<string>;

  constructor(
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

    this.store.pipe(select('produtos')).subscribe(
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
