import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProdutosTodosComponent } from './produtos-todos-component/produtos-todos.component';
import { routing } from './produtos-todos.routing';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    routing
  ],
  declarations: [
    ProdutosTodosComponent
  ],
  providers: [

  ],
})
export class ProdutosTodosModule { }
