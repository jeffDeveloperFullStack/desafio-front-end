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

registerLocaleData(localePt);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

    ProdutosExclusivosModule,
    ProdutosFavoritosModule,
    ProdutosPromocaoModule,
    ProdutosTodosModule
  ],
  providers: [
    AppService,
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
