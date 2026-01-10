import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly http = inject(HttpClient);
  url = 'http://localhost:3000/api/products';
  getAllProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.url);
  }
}
