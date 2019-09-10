import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProdutosFavoritosComponent } from './produtos-favoritos-component/produtos-exclusivos.component';
import { routing } from './produtos-favoritos.routing';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [
    ProdutosFavoritosComponent
  ],
  providers: [

  ],
})
export class ProdutosFavoritosModule { }
