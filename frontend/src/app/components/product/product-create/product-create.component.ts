import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit{

  product: Product = {
    name: '',
    price: 0
  }

  constructor (
    private productService: ProductService,
    private router: Router) {

  }

  ngOnInit(): void {
    
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe( _=> {
      this.productService.showMessage('Produto cadastrado com sucesso!', false)
      this.cancel()
    })
  }

  cancel(): void {
    this.router.navigate(['products'])
  }
}
