import { Component ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../services/data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-profil-user',
  standalone: true,
  imports: [CommonModule,FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './profil-user.component.html',
  styleUrl: './profil-user.component.css'
})
export class ProfilUserComponent {
  dataArray : any=[];
  messageSuccess:any
   username:any
   name:any
   role:any
   emailuser:any
   id:any
   

   dataUser={
    username:'',
    role:'',
    email:'',
    phone:'',
    type:'',
    adress:'',
    dateNaissance:'',
    departement:'',
    id:''
  }
  


  constructor(private ds:DataService ){
    if (typeof localStorage !== 'undefined') {
      this.id = localStorage.getItem('id');
      this.username = localStorage.getItem('username');
      this.name = localStorage.getItem('username');
      console.log(this.username);
      this.role = localStorage.getItem('role');
      this.emailuser = localStorage.getItem('email');

      console.log(this.emailuser)
      
     
    } else {
     
      this.username = 'Username';
    }
      this.getUser();
  }
 
  getUser(){
    setTimeout(()=>{
    this.ds.getuser().subscribe((res)=>{
      this.dataArray=res;
      console.log(this.dataArray);
    }
    ,
    (error: HttpErrorResponse) => {
      console.log(error.message);})
    },200) }


    getdata(username:string,email:string,phone: string,dateNaissance: string,type:string,departement:string,
      adress:string,id:any){
      this.messageSuccess=''
      this.dataUser.username=username
      this.dataUser.email=email 
      this.dataUser.phone=phone 
      this.dataUser.dateNaissance=dateNaissance
      this.dataUser.type=type
      this.dataUser.departement=departement
      this.dataUser.adress=adress
      this.dataUser.id=id
      console.log(this.dataUser)
  
    }

  update(d: any) {
    
     let data= d.value
     console.log(data);
    this.ds.updateUser(this.dataUser.id,data).subscribe(
      response=>{
        console.log(response)
        console.log(response)
        let indexid = this.dataArray.findIndex((obj: any) => obj._id == this.dataUser.id);
        if (indexid !== -1 && this.dataArray[indexid]) {
          this.dataArray[indexid].username = data.username;
          this.dataArray[indexid].email = data.email;
          this.dataArray[indexid].phone = data.phone;
          this.dataArray[indexid].type = data.type;
          this.dataArray[indexid].departement=data.departement
          this.dataArray[indexid].dateNaissance=data.dateNaissance
          this.dataArray[indexid].adress=data.adress
         
          this.messageSuccess = `votre profile a été mis à jour.`;
        } else {
          console.error('Error: Invalid index or dataArray element is undefined.');
        }
        
      }
      ,(error:HttpErrorResponse)=>{
        console.log(error.message)})
      
  }

  

}
