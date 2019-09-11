import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProdutosTodosComponent } from './produtos-todos-component/produtos-todos.component';
import { routing } from './produtos-todos.routing';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    routing,
    InfiniteScrollModule
  ],
  declarations: [
    ProdutosTodosComponent
  ],
  providers: [

  ],
})
export class ProdutosTodosModule { }
