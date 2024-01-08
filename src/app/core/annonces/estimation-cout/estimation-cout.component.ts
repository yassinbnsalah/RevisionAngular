import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-estimation-cout',
  templateUrl: './estimation-cout.component.html',
  styleUrls: ['./estimation-cout.component.css']
})
export class EstimationCoutComponent {


  cout : number = 0;
  EstimationForm !: FormGroup;
  constructor(private fb: FormBuilder, private service: ProjectService,
    private router: Router) { }


  ngOnInit(): void {
    this.EstimationForm = this.fb.group({
      position: ['', Validators.required],
      nombreC: ['', [Validators.required]],
    })
  }

  Calcul() {
    console.log(this.EstimationForm.value.position);
    console.log(this.EstimationForm.value.nombreC.length)
    if (this.EstimationForm.value.position == 'haut') {
      if (this.EstimationForm.value.nombreC.length <= 30) {
        this.cout = 10
      } else {
        this.cout = 20
      }
    } else if (this.EstimationForm.value.position == "bas") {
      if (this.EstimationForm.value.nombreC.length <= 30) {
        this.cout = 5
      } else {
        this.cout = 15
      }
    }
  }




}
