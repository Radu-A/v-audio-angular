import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ProductModel } from '../../../models/product.model';
import { ProductService } from '../../../services/product.service';
import { ProductCard } from '../components/product-card/product-card';

@Component({
  selector: 'app-product-list',
  imports: [AsyncPipe, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
  serve = inject(ProductService);
  productList$: Observable<ProductModel[]> = this.serve.getAllProducts();
}
