import {Component, OnInit} from '@angular/core';
import {Product, ProductService} from '../shared/product.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Observable<Product[]>;

  private keyword: string;

  private titleFilter: FormControl = new FormControl();

  constructor(private productService: ProductService) {


  }

  ngOnInit() {

    this.products = this.productService.getProducts();

    this.productService.searchEvent.subscribe(
      params => this.products = this.productService.search(params)
    );


  }


}
