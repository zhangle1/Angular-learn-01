import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Comment, Product, ProductService} from '../shared/product.service';
import {WebSocketService} from '../shared/web-socket.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {


  product: Product;

  comments: Comment[];

  newRating = 5;
  newComment = '';

  isCommentHidden = true;

  isWatched = false;
  currentBid: number;

  constructor(private  routeInfo: ActivatedRoute,
              private productService: ProductService,
              private wsService: WebSocketService) {
  }

  ngOnInit() {
    const productId: number = Number(this.routeInfo.snapshot.params['productId']);
    this.productService.getProduct(productId)
      .subscribe(
        product => {
          this.product = product;
          this.currentBid = this.product.price;
        }
      )
    ;
    this.productService.getCommentsForProductId(productId)
      .subscribe(
        comments => this.comments = comments
      );
    // const commentsForProductId = this.productService.getCommentsForProductId(productId);
  }


  addComment() {
    const comment = new Comment(0, this.product.id, new Date().toISOString(), 'someone', this.newRating, this.newComment);
    this.comments.unshift(comment);

    const sum = this.comments.reduce((s, c) => s + c.rating, 0);
    this.product.rating = sum / this.comments.length;

    this.newComment = null;
    this.newRating = 5;
    this.isCommentHidden = true;

  }


  watchProduct() {
    this.isWatched = !this.isWatched;
    this.wsService.createObservableSocket('ws://localhost:8085', this.product.id)
      .subscribe()
    ;
  }

}
