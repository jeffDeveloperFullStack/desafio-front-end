import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { LOCALE_ID } from '@angular/core';
import { NgModule } from '@angular/core';
import { ProdutosExclusivosModule } from './pages/produtos-exclusivos/produtos-exclusivos.module';
import { ProdutosFavoritosModule } from './pages/produtos-favoritos/produtos-favoritos.module';
import { ProdutosPromocaoModule } from './pages/produtos-promocao/produtos-promocao.module';
import { ProdutosTodosModule } from './pages/produtos-todos/produtos-todos.module';

import { StoreModule } from '@ngrx/store';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { produtoReducer } from './reducers/store/produto-reducer';
import { ProdutoStoreService } from './services/produto-store.service';
import { EffectsModule } from '@ngrx/effects';
import { ProdutoEffects } from './reducers/store/produto.effects';
// import { filterReducer } from './reducers/filter-reducer';
import { ProdutoDetalheModule } from './pages/componentes/produto-detalhe/produto-detalhe.module';


registerLocaleData(localePt);
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

    ProdutosExclusivosModule,
    ProdutosFavoritosModule,
    ProdutosPromocaoModule,
    ProdutosTodosModule,

    ProdutoDetalheModule,

    // StoreModule.forRoot({ filter: filterReducer, produtos: produtoReducer }),
    StoreModule.forRoot({ produtos: produtoReducer }),
    StoreDevtoolsModule.instrument(),

    EffectsModule.forRoot([ProdutoEffects]),
  ],
  providers: [
    AppService,
    ProdutoStoreService,
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
