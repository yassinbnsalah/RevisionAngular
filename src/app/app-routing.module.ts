import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeProductComponent } from './core/product/liste-product/liste-product.component';
import { AddProductComponent } from './core/product/add-product/add-product.component';
import { UpdateProductComponent } from './core/product/update-product/update-product.component';
import { DetailsProductComponent } from './core/product/details-product/details-product.component';
import { ListCategoryComponent } from './core/category/list-category/list-category.component';
import { AddCategoryComponent } from './core/category/add-category/add-category.component';
import { UpdateCategoryComponent } from './core/category/update-category/update-category.component';
import { AnnoncesComponent } from './core/annonces/annonces/annonces.component';
import { AppComponent } from './core/annonces/app/app.component';


const routes: Routes = [
  /*{path:"listeProduct" , component:ListeProductComponent},
  {path:"add/product" , component:AddProductComponent},*/
  {path:"app" , component:AppComponent},
  {path:"annonces", component:AnnoncesComponent},
  {
    path: "product",
    children: [
      { path: "", component: ListeProductComponent },
      { path: "add", component: AddProductComponent },
      { path: "update/:id", component: UpdateProductComponent },
      { path: ":id", component: DetailsProductComponent }
    ]
  },
  { path: "category", loadChildren: () => import('./category/category.module').then(m => m.CategoryModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
