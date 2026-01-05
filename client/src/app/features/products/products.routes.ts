import { Routes } from '@angular/router';
import { ProductDetails } from './product-details/product-details';
import { ProductList } from './product-list/product-list';

export const PRODUCT_ROUTES: Routes = [
  {
    path: '',
    component: ProductList,
  },
  {
    path: 'details',
    component: ProductDetails,
  },
];
