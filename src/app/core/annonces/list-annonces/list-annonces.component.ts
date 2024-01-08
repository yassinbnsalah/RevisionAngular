import { Component, OnInit } from '@angular/core';
import { Annonce } from 'src/app/models/annonce';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-list-annonces',
  templateUrl: './list-annonces.component.html',
  styleUrls: ['./list-annonces.component.css']
})
export class ListAnnoncesComponent implements OnInit{
  annonces !: Annonce[];
  constructor(private service : ProjectService){}
  ngOnInit(): void {
    this.getAnnonce();
  }

  getAnnonce(){
    this.service.getAllAnnonce().subscribe((data)=>{
      console.log(data);
      
      this.annonces = data 
    })
  }
}
