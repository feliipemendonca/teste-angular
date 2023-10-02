import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['../product-create/product-create.component.scss']
})
export class ProductDeleteComponent implements OnInit {

  product!: Product;

  constructor(
    private productService: ProductService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id')
      this.productService.readById(id).subscribe(product => {
        this.product = product
      })
  }

  deleteProduct(): void {
    this.productService.delete(this.product).subscribe(() => {
      this.productService.showMessage('Produto apagado com sucesso!')
      this.cancel()
    })
  }

  cancel(): void {
    this.location.back()
  }
}
