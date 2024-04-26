
import { CUSTOM_ELEMENTS_SCHEMA, Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { AuthadminService } from '../views/services/authadmin.service';
import { DataService } from '../views/services/data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { response } from 'express';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterModule,RouterLink,CommonModule,FormsModule],
  
      schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],

  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {
  Array : any=[];
  dataNews={
    text:"",
    id:""
  }
  messageSuccess=""

  username:any
  constructor( private ds:DataService,private route:Router){
    if (typeof localStorage !== 'undefined') {
      this.username = localStorage.getItem('username');
    } else {
      // Handle the case where localStorage is not available
      this.username = 'FallbackUsername'; // Replace with an appropriate fallback value
    }

    this.ds.getNews().subscribe(
      (data)=>{this.Array=data
     // console.log(data);
                        })
  }

  add(f:any){
    let data=f.value
    //console.log(data)
    this.ds.addNews(data).subscribe(response=>{
      console.log(response)
      this.Array.splice(this.Array.length, 0, response);
      
    },(err:HttpErrorResponse)=>{
      console.log(err)
      //console.log(err.error)
      //console.log(err.status)
    })
   }
  
   getdata(text:string,id:any){
    this.dataNews.text=text
    this.dataNews.id=id;
    console.log(this.dataNews)

   }

   updatedata(f:any){
    let data =f.value
    this.ds.updateNews(this.dataNews.id,data).subscribe(response=>{
      console.log(response)
      let indexid = this.Array.findIndex((obj: any) => obj._id == this.dataNews.id);
      if (indexid !== -1 && this.Array[indexid]) {
        this.Array[indexid].text = data.text;
        this.messageSuccess = `This employee is updated`;
      } else {
        console.error('Error: Invalid index or dataArray element is undefined.');
      }
        }
    ,(err:HttpErrorResponse)=>console.log(err))
   }

   deleteNews(id:any,i:number){
    
      this.ds.deleteNews(id).subscribe(response=>{
      console.log(response)
      this.Array.splice(i,1)})
   }
  

 
}
