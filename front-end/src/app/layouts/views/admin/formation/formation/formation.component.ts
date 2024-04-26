import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../../services/data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { error } from 'node:console';

@Component({
  selector: 'app-formation',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.css'
})
export class FormationComponent {
  ArrayData : any=[];
  dataFormation={
    titre:"",
    description:"",
    date:"",
    lieu:"",
    id:""
  }
  messageErr=""
  messageSuccess1=""
  messageSuccess2=""
   constructor(private ds:DataService){
    setTimeout(()=>{
    this.ds.getFormation().subscribe(
      (data)=>{this.ArrayData=data
     
                        },(error:HttpErrorResponse)=>{
                          console.log(error.message)
                        })
                      },100) ;
    }
 
   
 Ajouter(f:any){
  this.messageSuccess1=""
  let data=f.value
  this.ds.AjouterFormation(data).subscribe(
    response=>{
      console.log(response)
      this.messageSuccess1="Ajouter avec succès"
      this.ArrayData.splice(this.ArrayData.length, 0, response);
    
  },(err:HttpErrorResponse)=>{
    this.messageErr=err.error
  })
 }
 deleteFormation(id:any,i:number){
  this.ds.deleteFormation(id).subscribe(response=>{
  console.log(response)
  this.ArrayData.splice(i,1)})
}

getdata(titre:string,description:string,date:string,lieu:string,id:any){
  this.dataFormation.titre=titre
  this.dataFormation.description=description
  this.dataFormation.date=date
  this.dataFormation.lieu=lieu
  this.dataFormation.id=id;
  console.log(this.dataFormation)
  this.messageSuccess2=""

 }

 updatedata(d:any){
  let data= d.value
  console.log(d.value);
  console.log(this.dataFormation.id);
  this.ds.updateFormation(this.dataFormation.id,data).subscribe(
    response=>{
      console.log(response)
      let indexid = this.ArrayData.findIndex((obj: any) => obj._id == this.dataFormation.id);
      if (indexid !== -1 && this.ArrayData[indexid]) {
        this.ArrayData[indexid].titre = data.titre;
        this.ArrayData[indexid].description = data.description;
        this.ArrayData[indexid].date = data.date;
        this.ArrayData[indexid].lieu = data.lieu;
        this.messageSuccess2 = `L a été modifiée avec succès.`;
      } else {
        console.error('Error: Invalid index or dataArray element is undefined.');
      }
      
    }

    ,(error:HttpErrorResponse)=>{
      console.log(error.message)})

 }



}
