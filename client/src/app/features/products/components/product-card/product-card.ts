import { Component, computed, input } from '@angular/core';
import { ProductModel } from '../../../../models/product.model';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  product = input.required<ProductModel>();
  photoUrl = computed(() => {
    return `https://res.cloudinary.com/ds9uwjcs7/image/upload/w_500/v1764931470/${
      this.product().photos[0]
    }.png`;
  });
}
