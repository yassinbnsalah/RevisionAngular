import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { FormsModule } from '@angular/forms';
import { ListCategoryComponent } from '../core/category/list-category/list-category.component';
import { AddCategoryComponent } from '../core/category/add-category/add-category.component';
import { UpdateCategoryComponent } from '../core/category/update-category/update-category.component';
import { DetailCategoryComponent } from '../core/category/detail-category/detail-category.component';


@NgModule({
  declarations: [
    ListCategoryComponent,
    AddCategoryComponent,
    UpdateCategoryComponent,
    DetailCategoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule ,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
