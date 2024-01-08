import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit{
  categories !: Category[];
  constructor(private service : ProjectService, private router  : Router){}
  ngOnInit(): void {
    this.GetAll();
  }

  GoToCategoryUpdate(id:any){
    this.router.navigate(['category/update/'+id])
  }

  GetAll(){
    this.service.GetAllGategory().subscribe((data)=>{
      console.log(data);
      this.categories = data 
      
    })
  }

  GoToCategoryAdd(){
    this.router.navigate(['category/add'])
  }
}
