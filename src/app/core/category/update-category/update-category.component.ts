import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit{

  category = new Category(); 
  constructor(private service : ProjectService, private ac : ActivatedRoute , 
    private router : Router){}
  ngOnInit(): void {
    this.getCategoryID();
  }

  getCategoryID(){
      this.service.GetGategoryID(this.ac.snapshot.params['id']).subscribe((data)=>{
          this.category = data 
      })
  }

  updateCategory(){
    this.service.UpdateCategory(this.ac.snapshot.params['id'] , this.category ).subscribe((data)=>{
      this.router.navigate(['/category'])
    })
  }
}
