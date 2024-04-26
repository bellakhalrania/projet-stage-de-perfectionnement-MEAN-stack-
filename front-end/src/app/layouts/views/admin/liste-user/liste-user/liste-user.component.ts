import { Component } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-liste-user',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './liste-user.component.html',
  styleUrl: './liste-user.component.css'
})
export class ListeUserComponent {
  datauser : any=[];
 
  User:any
  messageErr=''
  messageEr=''
  messageSu=''
  searchdepartement:any
  searchname:any

  constructor(private ds:DataService) 
  {
    setTimeout(()=>{
  this.ds.getuser().subscribe(
    (data)=>{this.datauser=data
    console.log(data);
  })},100);
}

deleteUser(id: any, i: number) {
  this.ds.deleteUser(id).subscribe(
    (response) => {
      console.log(response);
      this.datauser.splice(i, 1);
    },
    (error: HttpErrorResponse) => {
      console.log(error.message);
      this.messageErr = "Une erreur s'est produite lors de la suppression de l'utilisateur.";
    }
  );
}
getUser(id:any){
  this.ds.getuserById(id).subscribe(
    (response) =>{ (this.User = response)
    console.log(this.User)}
,(err) => {
  console.log(err)
  this.messageErr = "Une erreur s'est produite lors du chargement des utilisateurs.";
})
}

onSearchName() {
  const name = this.searchname;
  console.log(name);
  this.messageEr = '';
  this.messageSu = ''; // Réinitialiser le message d'erreur

  if (!name) {
    this.ds.getuser().subscribe(
      (data) => {
        this.datauser = data;
        console.log(data);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
        this.messageEr = "Une erreur s'est produite lors de la recherche des employés.";
      }
    );
  } else {
    this.ds.getOneUserByname(name).subscribe(
      (data) => {
        this.datauser = data;
        console.log(data);
        if (this.datauser.length === 0) {
          this.messageEr = "Aucun utilisateur trouvé pour ce nom.";
        } else {
          this.messageSu = "Utilisateur trouvé"
        }
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
        this.messageErr = "Une erreur s'est produite lors de la recherche des utilisateurs.";
      }
    );
  }
}
onSearchIconClick() {
  const departement = this.searchdepartement;
  console.log(departement);
  this.messageEr = '';
  this.messageSu = ''; // Réinitialiser le message d'erreur

  if (!departement) {
    this.ds.getuser().subscribe(
      (data) => {
        this.datauser = data;
        console.log(data);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
        this.messageEr = "Une erreur s'est produite lors de la recherche des employés.";
      }
    );
  } else {
    this.ds.getOneUserBydepartement(departement).subscribe(
      (data) => {
        this.datauser = data;
        console.log(data);
        if (this.datauser.length === 0) {
          this.messageEr = "Aucun utilisateur trouvé pour ce département.";
        } else {
          this.messageSu = "Utilisateur trouvé.";
        }
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
        this.messageErr = "Une erreur s'est produite lors de la recherche des utilisateurs.";
      }
    );
  }
}

}
