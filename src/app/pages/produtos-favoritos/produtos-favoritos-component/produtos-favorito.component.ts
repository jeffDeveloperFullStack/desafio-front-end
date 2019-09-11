import { OnInit, Component } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { FormControl } from '@angular/forms';
import { Observable, of, combineLatest } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

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

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.filter = new FormControl('');
    this.appService.getProdutos().subscribe(
      response => {
        this.produtos$ = of(response.produtos);
        this.filter$ = this.filter.valueChanges.pipe(startWith(''));
        this.filteredProdutos$ = combineLatest(this.produtos$, this.filter$).pipe(
          map(
            ([produtos, filterString]) => produtos.filter(produto => produto.nome.toLowerCase().indexOf(filterString.toLowerCase()) !== -1)
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
