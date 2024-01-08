import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeProductComponent } from './core/product/liste-product/liste-product.component';
import { AddProductComponent } from './core/product/add-product/add-product.component';
import { UpdateProductComponent } from './core/product/update-product/update-product.component';
import { DetailsProductComponent } from './core/product/details-product/details-product.component';
import { ListCategoryComponent } from './core/category/list-category/list-category.component';
import { AddCategoryComponent } from './core/category/add-category/add-category.component';
import { UpdateCategoryComponent } from './core/category/update-category/update-category.component';
import { DetailCategoryComponent } from './core/category/detail-category/detail-category.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnnoncesComponent } from './core/annonces/annonces/annonces.component';
import { ListAnnoncesComponent } from './core/annonces/list-annonces/list-annonces.component';
import { EstimationCoutComponent } from './core/annonces/estimation-cout/estimation-cout.component';
@NgModule({
  declarations: [
    AppComponent,
    ListeProductComponent,
    AddProductComponent,
    UpdateProductComponent,
    DetailsProductComponent,
    AnnoncesComponent,
    ListAnnoncesComponent,
    EstimationCoutComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

    ReactiveFormsModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
