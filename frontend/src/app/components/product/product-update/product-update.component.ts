import { Product } from './../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['../product-create/product-create.component.scss']
})
export class ProductUpdateComponent implements OnInit {

  product: Product = {
    name :'',
    price: 0
  }

  constructor(
    private productService: ProductService, 
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
    ) {}

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe(product => {
      this.product = product
      console.log(product)
    });
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('Produto atualizado com sucesso!')
      this.cancel()
    })
  }

  cancel() : void {
    this.location.back()
  }
}
