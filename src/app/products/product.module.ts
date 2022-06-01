import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';




import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';

import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ProductListComponent,
  ProductDetailComponent,
ConvertToSpacesPipe,

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path:'products',component:ProductListComponent,canActivate:[ProductDetailGuard]},
      {path:'products/:id',component:ProductDetailComponent}
    ]),
    SharedModule
  ]
})
export class ProductModule { }
