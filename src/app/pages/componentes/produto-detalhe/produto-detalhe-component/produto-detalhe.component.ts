import { OnInit, Component } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Observable, of, Subscription } from 'rxjs';
import { Location } from '@angular/common';
import { ProdutoStoreService } from 'src/app/services/produto-store.service';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.scss'],
})
export class ProdutoDetalheComponent implements OnInit {

  public filter: FormControl;
  public produto: any;
  public inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.filter = new FormControl('');
    this.inscricao = this.route.params.subscribe((params: any) => {
      if (params) {
        console.log(params.id);
        this.store.pipe(select('produtos')).pipe(
          // tslint:disable-next-line: triple-equals
          map(data => data.filter(produto => produto.id == params.id))
        ).subscribe(
          response => {
            this.produto = response;
            console.log(response);
          }
        );
      }
    });
  }
}
