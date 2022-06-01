import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
title:string='Product-detail'
errorMessage:string=''
product:Iproduct |undefined
  constructor(private _activeroute:ActivatedRoute,
    private _router:Router,
    private _productservice:ProductService) { }

  ngOnInit(): void {
 const id = Number(this._activeroute.snapshot.paramMap.get('id'))
 this.title+= `:${id}`
 this.getProduct(id)
  }
  getProduct(id:number)
  {
    this._productservice.getProducts().subscribe({
      next:(product) => product=product,
      error:(err)=> this.errorMessage=err,
      complete:()=>console.log('Reading single product completed')
    })
    
  }

  onBack():void{
    this._router.navigate(['/products'])
  }

}
