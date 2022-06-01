import { NgModule } from '@angular/core';
import { TestComponentRenderer } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import{TestComponent} from 'src/test/test.component';
import { Test2Component } from './test2/test2.component';
import { CustomerComponent } from './customer/customer.component';
import { StudentComponent } from './student.component';
import { DepartmentComponent } from './department.component';
import { ChildrenComponent } from './children/children.component';
import { ProductListComponent } from './products/product-list.component';

import { ProductDetailComponent } from './products/product-detail.component';
import { HomeComponent } from './home/home.component'
import { ProductDetailGuard } from './products/product-detail.guard';
import { ProductModule } from './products/product.module';
import { Customer } from './customers/customer';
import { CustomerReactiveComponent } from './customers/customer-reactive/customer-reactive.component';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    CustomerComponent,
    StudentComponent,
    DepartmentComponent,
    ChildrenComponent,
 
    HomeComponent,
      CustomerReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
 
    RouterModule.forRoot([
  
  {path:'home',component:HomeComponent},
  {path:'customers',component:CustomerComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'*',}
    ]),
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
