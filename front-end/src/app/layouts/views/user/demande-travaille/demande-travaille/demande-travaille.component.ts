import { Component } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-demande-travaille',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './demande-travaille.component.html',
  styleUrl: './demande-travaille.component.css'
})
export class DemandeTravailleComponent {
  message = "";
  messageErr=""
 
  username:any
  email:any

 
  constructor(private ds: DataService) {
    if (typeof localStorage !== 'undefined') {
      this.username= localStorage.getItem('username') || '';
      this.email= localStorage.getItem('email') || '';
      console.log(this.username)
     
      
    } else {
      // Handle the case where localStorage is not available
      this.username = 'Username'; // Replace with an appropriate fallback value
    }
   

  }

  add(f: any) {
    let data = f.value;
    data.username=this.username;
    data.email=this.email;
    console.log(data);
    this.ds.addDemandeEmploi(data).subscribe(response => {
      console.log(response);
      this.message = ' La demande a été envoyée avec succès.';
    }, (err: HttpErrorResponse) => {
      this.messageErr = err.error;
    });
  }
  



    
  }
  

