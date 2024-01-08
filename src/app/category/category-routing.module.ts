import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCategoryComponent } from '../core/category/list-category/list-category.component';
import { AddCategoryComponent } from '../core/category/add-category/add-category.component';
import { UpdateCategoryComponent } from '../core/category/update-category/update-category.component';

const routes: Routes = [
  {path:"" , component:ListCategoryComponent},
  {path:"add" , component:AddCategoryComponent},
  {path:"update/:id" , component :UpdateCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
