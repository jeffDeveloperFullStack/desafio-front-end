import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProdutosPromocaoComponent } from './produtos-promocao-component/produtos-promocao.component';
import { routing } from './produtos-promocao.routing';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [
    ProdutosPromocaoComponent
  ],
  providers: [

  ],
})
export class ProdutosPromocaoModule { }
