import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProdutosFavoritosComponent } from './produtos-favoritos-component/produtos-favorito.component';
import { routing } from './produtos-favoritos.routing';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    routing,
    InfiniteScrollModule
  ],
  declarations: [
    ProdutosFavoritosComponent
  ],
  providers: [

  ],
})
export class ProdutosFavoritosModule { }
