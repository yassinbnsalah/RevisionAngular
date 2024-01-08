import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  urlProduct  = "http://localhost:3000/product"
  urlCategory = "http://localhost:3000/category"
  constructor(private http : HttpClient) { }


  GetAllProduct():Observable<Product[]>{
    return this.http.get<Product[]>(this.urlProduct);
  }

  GetProductById(id:any):Observable<Product>{
    return this.http.get<Product>(this.urlProduct+"/"+id)
  }

  AddProduct(product :any){
    return this.http.post(this.urlProduct , product)
  }

  DeleteProduct(id:any){
    return this.http.delete(this.urlProduct+"/"+id)
  }

  UpdateProduct(id:number , product:Product){
    return this.http.put(this.urlProduct+"/"+id , product)
  }
}
