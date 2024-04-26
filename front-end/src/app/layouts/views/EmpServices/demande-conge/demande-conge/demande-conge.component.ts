import { Component } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demande-conge',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './demande-conge.component.html',
  styleUrl: './demande-conge.component.css'
})
export class DemandeCongeComponent {
  messageErr = "";
  message = "";
  
 
  firstname:any
  lastname:any
  email:any

  constructor(private ds: DataService) {
    if (typeof localStorage !== 'undefined') {
      this.firstname= localStorage.getItem('firstname') || '';
      this.lastname= localStorage.getItem('lastname') || '';
      this.email= localStorage.getItem('email') || '';
      
     
      
    } else {
      // Handle the case where localStorage is not available
      this.firstname = 'firstname'; // Replace with an appropriate fallback value
    }
  }


  add(f: any) {
    let data = f.value;
    data.firstname=this.firstname;
    data.email=this.email
    console.log(data);
    this.ds.ajouterDemandeconge(data).subscribe(response => {
      console.log(response);
      this.message = ' La demande a été envoyée avec succès.';
    }, (err: HttpErrorResponse) => {
      this.messageErr = err.error;
    });
  }
}
