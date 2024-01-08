import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  category = new Category()
  showForm(f: any) {
    console.log(f)
  }
  constructor(private service : ProjectService, private router : Router){}
  saveCategory(category:Category){
    this.service.AddCategory(category).subscribe((data)=>{
        this.router.navigate(['category'])
    })
  }


}
