import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProdutosExclusivosComponent } from './produtos-exclusivos-component/produtos-exclusivos.component';
import { routing } from './produtos-exclusivos.routing';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    routing,
    InfiniteScrollModule
  ],
  declarations: [
    ProdutosExclusivosComponent
  ],
  providers: [

  ],
})
export class ProdutosExclusivosModule { }
