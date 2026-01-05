import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        loadComponent: () => import('./features/home/home').then((c) => c.Home),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./features/products/products.routes').then((c) => c.PRODUCT_ROUTES),
      },
    ],
  },
];
