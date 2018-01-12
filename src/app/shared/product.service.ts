import {Injectable} from '@angular/core';

@Injectable()
export class ProductService {

  private products: Product[] = [
    new Product(1, '第一个商品', 1.99, 3.5, '非常好的商品啊啊啊', ['电子产品', '硬件设备']),
    new Product(2, '第二个商品', 1.99, 3.5, '非常好的商品啊啊啊', ['电子产品', '硬件设备']),
    new Product(3, '第三个商品', 1.99, 3.5, '第三个商品', ['电子产品', '硬件设备']),
    new Product(4, '第四个商品', 1.99, 3.5, '第四个商品', ['电子产品', '硬件设备']),
    new Product(5, '第五个商品', 1.99, 3.5, '第五个商品', ['电子产品', '硬件设备'])
  ];

  private comments: Comment[] = [
    new Comment(1, 1, '2017-02-02 22:22:22', '张三', 3, '东西不错'),
    new Comment(2, 1, '2017-02-02 22:22:22', '李四', 3, '东西不错'),
    new Comment(3, 1, '2017-02-02 22:22:22', '王五', 3, '东西不错'),
    new Comment(4, 2, '2017-02-02 22:22:22', '张三', 3, '东西不错')
  ];


  constructor() {
  }

  getProducts() {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find((product) => product.id === id);
  }

  getCommentsForProductId(id: number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId === id);
  }

  getAllCategories(): string[] {
    return ['电子产品', '硬件设备', '图书'];
  }

}

export class Product {

  constructor(public id: number,
              public title: string,
              public price: number,
              public rating: number,
              public desc: string,
              public categories: Array<string>) {

  }
}

export class Comment {

  constructor(public id: number,
              public productId: number,
              public timestamp: string,
              public user: string,
              public rating: number,
              public content: string) {
  }

}



