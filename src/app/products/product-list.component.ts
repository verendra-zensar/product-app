import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
// import { threadId } from 'worker_threads';


import { Iproduct } from './product';
import { ProductService } from './product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  title: string='Product-List!!'
  imgHeight:number=70
  imgWidth:number=50
  showImage:boolean=false
  errorMessage:string=''
  sub:Subscription|undefined
  sub1!:Subscription
  // listfilter:string='hello'
  private _listFilter:string=''

  get listFilter():string{
   return this._listFilter

  }
  set listFilter(value:string)
  {
    this._listFilter = value;
    console.log(`In the Setter :${value}`)
    this.filteredProducts = this.performFilter(value)
    
  }
  filteredProducts:Iproduct[]=[]


  
products:Iproduct[]=[]
// private _productService
  

//   constructor(productService:ProductService) {
//     this._productService=productService
//    }
constructor(private _productService:ProductService){}
  ngOnInit(): void {
//  this.products=this._productService.getProducts()
//  this.filteredProducts=this.products
    this._productService.getProducts().subscribe({
      next:(products)=> this.products=products
    })
 
    },
    // {
    //   error:err=> this.errorMessage=err
    // })

    this.listFilter='Cart'

    console.log(`the lenght of the products array is ${this.products.length}`)
  }

  performFilter(filterBy:string):Iproduct[]{
    filterBy= filterBy.toLocaleLowerCase()  //tomake it case insensetive
    return this.products.filter((p:Iproduct) => p.productName.toLocaleLowerCase().includes(filterBy))
  }

toggleImage():void{

  this.showImage= !this.showImage
}
  onRatingClickedParent(message:string):void{
    this.title='Product List!' + message
  }


}


