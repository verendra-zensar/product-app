import { Injectable } from '@angular/core';
import { Iproduct } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {tap,catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productUrl : string = 'assets/api/test/products.json'

  products:Iproduct[] = []

  constructor(private _httpClient:HttpClient) { }

  getProducts():Observable<Iproduct[]>{
    // let res = this._httpClient.get<IProduct[]>(this.productUrl)
    // console.log(res)
    return this._httpClient.get<Iproduct[]>(this.productUrl)
    .pipe(
      tap((data)=>console.log(`All Products : ${JSON.stringify(data)}`)),
      catchError(this.handleError)
    )
  }

  private handleError(err:HttpErrorResponse){

    return throwError(err);
    
  }

}


