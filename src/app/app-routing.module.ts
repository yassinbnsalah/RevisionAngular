import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeProductComponent } from './core/product/liste-product/liste-product.component';
import { AddProductComponent } from './core/product/add-product/add-product.component';
import { UpdateProductComponent } from './core/product/update-product/update-product.component';
import { DetailsProductComponent } from './core/product/details-product/details-product.component';

const routes: Routes = [
  /*{path:"listeProduct" , component:ListeProductComponent},
  {path:"add/product" , component:AddProductComponent},*/
  {path:"product",
    children:[
      {path:"" , component:ListeProductComponent},
      {path:"add" , component:AddProductComponent},
      {path:"update/:id" , component:UpdateProductComponent},
      {path:":id" , component:DetailsProductComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
