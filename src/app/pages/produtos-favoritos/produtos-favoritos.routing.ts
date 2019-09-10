import { Routes, RouterModule } from '@angular/router';
import { ProdutosFavoritosComponent } from './produtos-favoritos-component/produtos-exclusivos.component';

const routes: Routes = [
  {
    path: 'produtos-favoritos',
    component: ProdutosFavoritosComponent,
  }
];

export const routing = RouterModule.forChild(routes);
