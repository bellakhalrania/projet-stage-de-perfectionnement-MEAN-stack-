import { CommonModule } from '@angular/common';

import {  CUSTOM_ELEMENTS_SCHEMA,Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../../services/data.service';
import { Router, RouterModule } from '@angular/router';
import { response } from 'express';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-addemployees',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './addemployees.component.html',
  styleUrl: './addemployees.component.css'
})
export class AddemployeesComponent {
  messageErr=""
   constructor(private ds:DataService,private route:Router){  }
   
 add(f:any){
  let data=f.value
  //console.log(data)
  this.ds.addEmployee(data).subscribe(response=>{
    //console.log(response)
    this.route.navigate(['admin/allemployees'])
    
  },(err:HttpErrorResponse)=>{
    this.messageErr=err.error
    //console.log(err.error)
    //console.log(err.status)
  })
 }
  

}
