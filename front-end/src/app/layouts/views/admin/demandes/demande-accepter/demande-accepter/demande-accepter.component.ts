import { Component } from '@angular/core';
import { DataService } from '../../../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demande-accepter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demande-accepter.component.html',
  styleUrl: './demande-accepter.component.css'
})
export class DemandeAccepterComponent {
  datademande : any=[];
  demande:any
  messageErr=''


  constructor(private ds:DataService) 
  {
  this.ds.getdemandeAccepter().subscribe(
    (data)=>{this.datademande=data
    console.log(data);
  })
}
deletedemande(id:any,i:number){
  if(!confirm("vous voulez Refusé cette demande?")){return}
  this.ds.deleteDemandeAccepterbyid(id).subscribe(response=>{
  console.log(response)
  this.datademande.splice(i,1)
})   
}

getOnedemande(id:any){
  this.ds.GetOneDemandeAccepter(id).subscribe(
    (response) =>{ (this.demande = response)
    console.log(this.demande)}
,(err) => {
  console.log(err)
  this.messageErr = `w`
})
}

}
