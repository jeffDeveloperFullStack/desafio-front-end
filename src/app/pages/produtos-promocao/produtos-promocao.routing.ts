import { Routes, RouterModule } from '@angular/router';
import { ProdutosPromocaoComponent } from './produtos-promocao-component/produtos-promocao.component';

const routes: Routes = [
  {
    path: 'produtos-promocao',
    component: ProdutosPromocaoComponent,
  }
];

export const routing = RouterModule.forChild(routes);
