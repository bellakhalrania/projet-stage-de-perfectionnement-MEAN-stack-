import { Component } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-loginuser',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './loginuser.component.html',
  styleUrl: './loginuser.component.css'
})
export class LoginuserComponent {
  constructor(private ads:DataService ,private route:Router)
   { console.log(this.ads.loggedIn) }

   messageErr=""
   dataReceived: any; 


   loginUser(f:any){
    let data=f.value


    this.ads.loginUser(data).subscribe((response) => {
      this.dataReceived = response;
      this.ads.SaveDataUser(this.dataReceived.token);
       this.route.navigate(['/user/Acceuil'])
      console.log(this.dataReceived.token)
      console.log(this.ads.ProfilUser)
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


