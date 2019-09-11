import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { routing } from './produto-detalhe.routing';
import { ProdutoDetalheComponent } from './produto-detalhe-component/produto-detalhe.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [
    ProdutoDetalheComponent
  ],
  providers: [

  ],
})
export class ProdutoDetalheModule { }
