import { Component } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-demande-stage',
  standalone: true,
  imports: [FormsModule, CommonModule,RouterModule],
  templateUrl: './demande-stage.component.html',
  styleUrl: './demande-stage.component.css'
})
export class DemandeStageComponent {
  messageErr = "";
  message = "";
  
 
  username:any
  email:any

  constructor(private ds: DataService,private route:Router) {
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
    this.ds.addDemande(data).subscribe(response => {
      console.log(response);
      this.message = ' La demande a été envoyée avec succès.';
      this.route.navigate(['/user/consultdemande']);
        window.location.reload();
      
    }, (err: HttpErrorResponse) => {
      this.messageErr = err.error;
    });
  }
}
