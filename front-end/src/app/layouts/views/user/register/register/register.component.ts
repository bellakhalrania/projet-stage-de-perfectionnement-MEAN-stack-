import { Component } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  messageErr=""
  constructor(private ds:DataService,private route:Router){  }
   
 register(f:any){
  let data=f.value
  //console.log(data)
  this.ds.registeruser(data).subscribe(response=>{
    //console.log(response)
    this.route.navigate(['loginuser'])
    
  },(err:HttpErrorResponse)=>{
    this.messageErr=err.error
    //console.log(err.error)
    
  })

 }

}
