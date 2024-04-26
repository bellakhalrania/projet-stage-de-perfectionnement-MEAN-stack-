import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, Component, NO_ERRORS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../../services/data.service';
import { error } from 'console';
import { Router, RouterModule } from '@angular/router';
import { response } from 'express';


@Component({
  selector: 'app-allemployees',
  standalone: true,
  imports: [HttpClientModule,CommonModule,FormsModule,RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
  templateUrl: './allemployees.component.html',
  styleUrl: './allemployees.component.css'
})
export class AllemployeesComponent  {
  
  dataArray : any=[];
   
  dataEmployee={
    firstname:'',
    lastname:'',
    email:'',
    phone:0,
    departement: '',
    post: '',
    ville:'',
    DateDeNaissance: '',
    id:''
  }

  
 searchname:any
  searchTerm: any
  messageErr=''

  messageSuccess=''
  constructor(private ds:DataService,private route:Router) 
  {
  this.ds.getAllemployees().subscribe(
    (data)=>{this.dataArray=data
    console.log(data);
                      })

                      
  
  }
  getAll(){
    this.messageErr=''

    this.messageSuccess=''
    this.ds.getAllemployees().subscribe(
      (data)=>{this.dataArray=data
      console.log(data);
      
                        })
  }

  onSearchName() {
    const name = this.searchname;
    console.log(name);
    this.messageErr = '';
    this.messageSuccess = ''; // Réinitialiser le message d'erreur

    if (!name) {
      this.ds.getAllemployees().subscribe(
        (data) => {
          this.dataArray = data;
          console.log(data);
        },
        (error: HttpErrorResponse) => {
          console.log(error.message);
          this.messageErr = "Une erreur s'est produite lors de la recherche des employés.";
        }
      );
    } else {
      this.ds.getOneByname(name).subscribe(
        (data) => {
          this.dataArray = data;
          console.log(data);
          if (this.dataArray.length === 0) {
            this.messageErr = "Aucun employé trouvé pour ce nom";
          } else {
            this.messageSuccess = "Employé trouvé";
          }
        },
        (error: HttpErrorResponse) => {
          console.log(error.message);
          this.messageErr = "Une erreur s'est produite lors de la recherche des employés.";
        }
      );
    }
  }
  onSearchIconClick() {
    const departement = this.searchTerm;
    console.log(departement);
    this.messageErr = '';
    this.messageSuccess = ''; // Réinitialiser le message d'erreur

    if (!departement) {
      this.ds.getAllemployees().subscribe(
        (data) => {
          this.dataArray = data;
          console.log(data);
        },
        (error: HttpErrorResponse) => {
          console.log(error.message);
          this.messageErr = "Une erreur s'est produite lors de la recherche des employés.";
        }
      );
    } else {
      this.ds.getOneBydepartement(departement).subscribe(
        (data) => {
          this.dataArray = data;
          console.log(data);
          if (this.dataArray.length === 0) {
            this.messageErr = "Aucun employé trouvé pour ce département";
          } else {
            this.messageSuccess = "Employé trouvé";
          }
        },
        (error: HttpErrorResponse) => {
          console.log(error.message);
          this.messageErr = "Une erreur s'est produite lors de la recherche des employés.";
        }
      );
    }
  }


  


  
  delete(id:any,i:number){
    this.ds.deleteemployee(id).subscribe(response=>{
    console.log(response)
    this.dataArray.splice(i,1)})
    
  }
  

  getdata(firstname:string,lastname:string,email:string,phone:number,departement: string,
    post: string,
    ville:string,
    DateDeNaissance: string,id:any){
    this.messageSuccess=''
    this.dataEmployee.firstname=firstname
    this.dataEmployee.lastname=lastname
    this.dataEmployee.email=email
    this.dataEmployee.phone=phone
    this.dataEmployee.departement=departement
    this.dataEmployee.post=post
    this.dataEmployee.ville=ville
    this.dataEmployee.DateDeNaissance=DateDeNaissance
    this.dataEmployee.id=id
    console.log(this.dataEmployee)

  }

  update(f: any) {
    let data= f.value
    this.ds.updateemployee(this.dataEmployee.id,data).subscribe(
      response=>{
        console.log(response)
        let indexid = this.dataArray.findIndex((obj: any) => obj._id == this.dataEmployee.id);
        if (indexid !== -1 && this.dataArray[indexid]) {
          this.dataArray[indexid].firstname = data.firstname;
          this.dataArray[indexid].lastname = data.lastname;
          this.dataArray[indexid].email = data.email;
          this.dataArray[indexid].phone = data.phone;
          this.dataArray[indexid].departement=data.departement
          this.dataArray[indexid].post=data.post
          this.dataArray[indexid].ville=data.ville
          this.dataArray[indexid].DateDeNaissance=data.DateDeNaissance
          this.messageSuccess = `Ce employé ${this.dataArray[indexid].firstname} a été mis à jour.`;
        } else {
          console.error('Error: Invalid index or dataArray element is undefined.');
        }
      }
      ,(error:HttpErrorResponse)=>{
        console.log(error.message)})
   
  }


  details(id:any){
    this.route.navigate(['admin/employeedetails/'+id])
  }
  
  
  
}
