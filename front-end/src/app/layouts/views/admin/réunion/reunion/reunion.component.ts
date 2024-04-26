import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../../services/data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-reunion',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './reunion.component.html',
  styleUrl: './reunion.component.css'
})
export class ReunionComponent {
  Array : any=[];
  Reunion={
    text:"",
    DateReunion:"",
    heure:"",
    id:""
  }
  messageSuccess=""
  constructor( private ds:DataService){
    setTimeout(()=>{ 
    this.ds.getReunion().subscribe(
      (data)=>{this.Array=data},
      (err:HttpErrorResponse)=>{
        console.log(err)
        
      }
      )},100);
   }

   addReunion(f:any){
    let data=f.value
     console.log(data)
    this.ds.addReunion(data).subscribe(response=>{
      this.Array.splice(this.Array.length, 0, response);
      
      
    },(err:HttpErrorResponse)=>{
      console.log(err)
      
    })
   }
  
   getdata(id:any,text:string,DateReunion:string,heure:string){
    this.messageSuccess=""
    this.Reunion.text=text,
    this.Reunion.DateReunion=DateReunion,
    this.Reunion.heure=heure,
    this.Reunion.id=id;
    console.log(this.Reunion)
   

   }

   updatedata(d:any){
    
    let data =d.value
    console.log("fffff")
    console.log(data)
    this.ds.updateReunion(this.Reunion.id,data).subscribe(response=>{
      console.log(response)
      let indexid = this.Array.findIndex((obj: any) => obj._id == this.Reunion.id);
      if (indexid !== -1 && this.Array[indexid]) {
        this.Array[indexid].text = data.text;
        this.Array[indexid].DateReunion = data.DateReunion;
        this.Array[indexid].heure = data.heure;
        this.messageSuccess = `la réunion a été modifiée avec succès.`;
        console.log(this.Array[indexid])
      } else {
        console.error('Error: Invalid index or Array element is undefined.');
      }
        }
    ,(err:HttpErrorResponse)=>console.log(err))
   }

   
   deleteReunion(id:any,i:number){
    
      this.ds.deleteReunion(id).subscribe(response=>{
      console.log(response)
      this.Array.splice(i,1)})
   }
  

  

}
