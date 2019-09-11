import { OnInit, Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Observable, of, Subscription, combineLatest } from 'rxjs';
import { Location } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

import * as actions from '../../../../reducers/store/produto-actions';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.scss'],
})
export class ProdutoDetalheComponent implements OnInit {

  public filter: FormControl;
  public produtos: any = [];
  public inscricao: Subscription;
  public filteredProdutos$: Observable<any>;


  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.filter = new FormControl('');
    this.inscricao = this.route.params.subscribe((params: any) => {
      if (params) {
        this.store.pipe(select('produtos')).pipe(
          // tslint:disable-next-line: triple-equals
          map(data => data.filter(produto => produto.id == params.id))
        ).subscribe(
          (response: any) => {
            if (response.length > 0) {
              this.produtos = response;
              this.filteredProdutos$ = of(response);
            }
          }
        );
      }
    });
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

  public goBack() {
    this.location.back();
  }
}
