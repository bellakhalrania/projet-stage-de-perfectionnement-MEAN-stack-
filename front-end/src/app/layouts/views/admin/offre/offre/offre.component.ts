import { Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-offre',
  standalone: true,
  imports: [CommonModule,FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './offre.component.html',
  styleUrl: './offre.component.css'
})
export class OffreComponent {

  Array : any=[];
  dataNews={
    text:"",
    id:""
  }
  messageSuccess=""
  constructor( private ds:DataService){ 
    setTimeout(()=>{
    this.ds.getNews().subscribe(
      (data)=>{this.Array=data
    
                        })},50);
   }

   add(f:any){
    let data=f.value
    //console.log(data)
    this.ds.addNews(data).subscribe(response=>{
      console.log(response)
      this.Array.splice(this.Array.length, 0, response);
      
    },(err:HttpErrorResponse)=>{
      console.log(err)
      
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
        this.messageSuccess = `Le offre a été modifiée avec succès.`;
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
