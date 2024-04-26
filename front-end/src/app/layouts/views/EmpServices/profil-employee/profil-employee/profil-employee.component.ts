import { Component } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profil-employee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profil-employee.component.html',
  styleUrl: './profil-employee.component.css'
})
export class ProfilEmployeeComponent {


 
    firstname:any
    lastname:any
    email:any
    role:any 
    departement:any 
    post:any 
    DateDeNaissance:any 
    phone:any 
    ville:any

    dataEmployee={
      firstname:'',
      lastname:'',
      email:'',
      role:'',
      departement:'',
      post:'',
      DateDeNaissance:'',
      phone:'',
      ville:''
    }
  
  constructor(private ds:DataService){
    if (typeof localStorage !== 'undefined') {
      
      this.firstname = localStorage.getItem('firstname');
      this.dataEmployee.firstname=this.firstname;
      this.lastname = localStorage.getItem('lastname');
      this.dataEmployee.lastname=this.lastname;
      this.email = localStorage.getItem('email');
      this.dataEmployee.email=this.email;
      this.departement = localStorage.getItem('departement');
      this.dataEmployee.departement=this.departement;
      this.post = localStorage.getItem('post');
      this.dataEmployee.post=this.post;
      this.DateDeNaissance = localStorage.getItem('DateDeNaissance');
      this.dataEmployee.DateDeNaissance=this.DateDeNaissance;
      this.phone = localStorage.getItem('phone');
      this.dataEmployee.phone=this.phone;
      this.ville = localStorage.getItem('ville');
      this.dataEmployee.ville=this.ville;
      
    } else {
     
      this.firstname = 'Username';
    }

   }

}
