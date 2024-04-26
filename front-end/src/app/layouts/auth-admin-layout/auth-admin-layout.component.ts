import { Component } from '@angular/core';
import { AuthadminService } from '../views/services/authadmin.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { response } from 'express';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-auth-admin-layout',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './auth-admin-layout.component.html',
  styleUrl: './auth-admin-layout.component.css'
})
export class AuthAdminLayoutComponent {
   constructor(private ads:AuthadminService ,private route:Router)
   { console.log(this.ads.loggedIn) }

   messageErr=""
   dataReceived: any; 


   loginadmin(f:any){
    let data=f.value


    this.ads.login(data).subscribe((response) => {
      this.dataReceived = response;
      this.ads.SaveData(this.dataReceived.token.token,this.dataReceived.token.username,this.dataReceived.token.role);
       this.route.navigate(['/admin/dashboard'])
     //console.log(this.ads.ProfilAdmin.username)
      //console.log(this.ads.ProfilAdmin.role)
      console.log(this.ads.loggedIn)
      //console.log(this.dataReceived.token)
      //console.log(response)
    }
    ,(err:HttpErrorResponse)=>{
      this.messageErr=err.error
      //console.log(err.error)
      //console.log(err.status)
    })

   }
}

