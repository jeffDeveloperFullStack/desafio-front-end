import { Routes, RouterModule } from '@angular/router';
import { ProdutoDetalheComponent } from './produto-detalhe-component/produto-detalhe.component';

const routes: Routes = [
  {
    path: 'produto-detalhe/:id',
    component: ProdutoDetalheComponent,
  }
];

export const routing = RouterModule.forChild(routes);
