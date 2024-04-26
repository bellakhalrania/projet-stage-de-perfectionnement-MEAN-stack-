import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../../services/data.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-employee',
  standalone: true,
  imports: [ FormsModule,CommonModule],
  templateUrl: './login-employee.component.html',
  styleUrl: './login-employee.component.css'
})
export class LoginEmployeeComponent {
  constructor(private ads:DataService ,private route:Router)
   { console.log(this.ads.loggedInEmp) }

   messageErr="";
   dataReceived: any; 


   loginEmpolyee(f:any){
    let data=f.value


    this.ads.loginEmployee(data).subscribe((response) => {
      this.dataReceived = response;
      this.ads.SaveDataEmployee(this.dataReceived.token);
       this.route.navigate(['/employee/Acceuil'])
     console.log(this.ads.ProfielEmployee.firstname)
      //console.log(this.ads.ProfilAdmin.role)
      console.log(this.ads.loggedInEmp)
      console.log(this.dataReceived.token)
      //console.log(response)
    }
    ,(err:HttpErrorResponse)=>{
      this.messageErr=err.error
      //console.log(err.error)
      //console.log(err.status)
    })

   }


}
