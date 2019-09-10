import { OnInit, Component } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { map, startWith } from 'rxjs/operators';
import { combineLatest, Observable, of } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Store, select } from '@ngrx/store';

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

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {

    // this.filter = new FormControl('');
    // this.appService.getProdutos().subscribe(
    //   response => {
    //     this.produtos$ = of(response.produtos);
    //     this.filter$ = this.filter.valueChanges.pipe(startWith(''));
    //     this.filteredProdutos$ = combineLatest(this.produtos$, this.filter$).pipe(
    //       map(
    //         ([produtos, filterString]) => produtos.filter(produto => produto.nome.indexOf(filterString) !== -1)
    //       )
    //     );
    //   }
    // );
  }

  public onFavorito(id, checked) {
    console.log(id);
    console.log(checked);
  }
}
