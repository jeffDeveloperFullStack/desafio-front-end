import { Routes, RouterModule } from '@angular/router';
import { ProdutosExclusivosComponent } from './produtos-exclusivos-component/produtos-exclusivos.component';

const routes: Routes = [
  {
    path: 'produtos-exclusivos',
    component: ProdutosExclusivosComponent,
  }
];

export const routing = RouterModule.forChild(routes);
