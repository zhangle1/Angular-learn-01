import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product, ProductService} from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productTitle: string;

  product: Product;

  constructor(private  routeInfo: ActivatedRoute,
              private productService: ProductService) {
  }

  ngOnInit() {
    const productId: number = Number(this.routeInfo.snapshot.params['productId']);
    this.product = this.productService.getProduct(productId);
    const commentsForProductId = this.productService.getCommentsForProductId(productId);
  }

}
