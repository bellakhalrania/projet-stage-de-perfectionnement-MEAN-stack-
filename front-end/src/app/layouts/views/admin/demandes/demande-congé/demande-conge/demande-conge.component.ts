import { Component } from '@angular/core';
import { DataService } from '../../../../services/data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-demande-conge',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './demande-conge.component.html',
  styleUrl: './demande-conge.component.css'
})
export class DemandeCongeComponent {
  datademande : any=[];
  demande:any
  i:any;
  messageSuccess=''
  messageSu=''
  dataAccepter={
    username:'',
    email:'',
    departement:'',
    type:'',
    text: '',
    id: ''
  }
  
  messageErr=''

  constructor(private ds:DataService) 
  {
  this.ds.getdemandeConge().subscribe(
    (data)=>{this.datademande=data
    console.log(data);
  })
  
}

deletedemande(id:any,i:number){
  if(!confirm("vous voulez Refusé cette demande?")){return}
  this.ds.deleteDemandeconge(id).subscribe(response=>{
  console.log(response)
  this.datademande.splice(i,1)
})   
}
getOnedemandeconge(id:any){
  this.ds.GetOneDemandeconge(id).subscribe(
    (response) =>{ (this.demande = response)
    console.log(this.demande)}
,(err) => {
  console.log(err)
  
})
}

getdata(username:string,email:string,departement:string,type:string,text:string,id:any){
  this.messageSuccess=''
  this.dataAccepter.username=username;
  this.dataAccepter.email=email;
  this.dataAccepter.departement=departement;
  this.dataAccepter.type=type;
  this.dataAccepter.text=text;
  this.dataAccepter.id=id;
 
  console.log(this.dataAccepter)
  this.add();
    

}
add() {
  let data = this.dataAccepter;
  console.log(data);
  this.ds.ajouterDemandeAccepter(data).subscribe(response => {
    console.log(response);
    this.messageSuccess = ' La demande a été envoyée avec Accepter.';
    console.log(this.messageSuccess)
  }, (err: HttpErrorResponse) => {
    this.messageErr = err.error;
  });
}

acceptDemande(id: any, index: number, username: string, email: string, departement: string,type:string, text: string) {
  this.messageSu=''
  if(!confirm("vous voulez accepter cette demande?")){return}
  this.getdata(username, email, departement,type, text, id); 
  setTimeout(() => {
    this.ds.deleteDemandeconge(id).subscribe(response=>{
      console.log(response)
      this.datademande.splice(index,1)
    })   
    this.messageSu = 'La demande a été acceptée avec succès.';
  }, 100);

 

}
  

}
