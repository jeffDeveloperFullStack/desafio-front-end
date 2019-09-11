import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { ProdutoStoreService } from './services/produto-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private appService: AppService,
    private produtoStoreService: ProdutoStoreService,
  ) {
    this.produtoStoreService.loadProdutos();
  }
  ngOnInit() { }
}
