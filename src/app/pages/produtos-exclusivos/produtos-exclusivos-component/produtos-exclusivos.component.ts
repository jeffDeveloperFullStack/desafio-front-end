import { OnInit, Component } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Observable, combineLatest, of } from 'rxjs';

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


  constructor(private appService: AppService) { }

  ngOnInit() {
    this.filter = new FormControl('');
    this.appService.getProdutos().pipe(
      map(
        data => data.produtos.filter(produto => produto.exclusivo === true)
      )
    ).subscribe(
      response => {
        this.produtos$ = of(response);
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
