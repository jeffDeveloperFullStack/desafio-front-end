import { Routes, RouterModule } from '@angular/router';
import { ProdutosTodosComponent } from './produtos-todos-component/produtos-todos.component';

const routes: Routes = [
  {
    path: 'produtos-todos',
    component: ProdutosTodosComponent,
  }
];

export const routing = RouterModule.forChild(routes);
