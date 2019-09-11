import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProdutosPromocaoComponent } from './produtos-promocao-component/produtos-promocao.component';
import { routing } from './produtos-promocao.routing';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    routing,
    InfiniteScrollModule
  ],
  declarations: [
    ProdutosPromocaoComponent
  ],
  providers: [

  ],
})
export class ProdutosPromocaoModule { }
