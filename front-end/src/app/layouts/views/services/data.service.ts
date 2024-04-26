import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  //private apiURL = 'http://localhost:3000';
  loggedIn:boolean=false
  loggedInEmp:boolean=false
  ProfilUser={
    id:'',
    username:'',
    role:'',
    email:'',
    phone:'',
    type: '',
    departement:'',
    dateNaissance:'',
    adress:''
  }
  ProfielEmployee={
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
  number={
    numberStage:''
  }

  constructor(private http:HttpClient){  }
    getAllemployees(){
      return this.http.get('http://localhost:3000/getAllemployee')
    }
    addEmployee(profile:any){
        return this.http.post('http://localhost:3000/addemployee',profile)
      }
    deleteemployee(id:any){
      return this.http.delete('http://localhost:3000/delete/'+id)
    }
    updateemployee(id:string,newprofile:any){
      return this.http.patch('http://localhost:3000/updateEmp/'+id,newprofile)
    }
    
    getOneemployee(id:any){
      return this.http.get('http://localhost:3000/getemployee/'+id)
    }
    getOneBydepartement(departement:any){
      return this.http.get('http://localhost:3000/getOnebydepartement/'+departement)
    }
    getOneByname(name:any){
      return this.http.get('http://localhost:3000/getOnebyname/'+name)
    }
    
    

// *************************************************News*****************************************************************//
    getNews(){
      return this.http.get('http://localhost:3000/getNews')
    }
    updateNews(id:string,news:any){
      return this.http.patch('http://localhost:3000/updateNews/'+id,news)
    }
    deleteNews(id:any){
      return this.http.delete('http://localhost:3000/deleteNews/'+id)
    }
    addNews(News:any){
      return this.http.post('http://localhost:3000/addNews',News)
    }
//==============================================End-News==============================================================//
//************************************************login user*********************************************//
    loginUser(data:any){
      return this.http.post('http://localhost:3000/login',data)
    }
  
    SaveDataUser(token:any){
       localStorage.setItem('token',token.token)
       localStorage.setItem('username',token.username)
       localStorage.setItem('role',token.role)
       localStorage.setItem('email',token.email)
       localStorage.setItem('phone',token.phone)
       localStorage.setItem('dateNaissance',token.dateNaissance)
       localStorage.setItem('adress',token.adress)
       localStorage.setItem('id',token.id)
       localStorage.setItem('type',token.type)
       localStorage.setItem('departement',token.departement)
       
       this.ProfilUser.id=token.id
       this.ProfilUser.username=token.username
       this.ProfilUser.role=token.role
       this.ProfilUser.email=token.email
       this.ProfilUser.phone=token.phone
       this.ProfilUser.dateNaissance=token.dateNaissance
       this.ProfilUser.adress=token.adress
       this.ProfilUser.type=token.type
       this.ProfilUser.departement=token.departement
       this.loggedIn=true
    }

//all user   
getuser(){
  return this.http.get('http://localhost:3000/getuser')
}

//register user
registeruser(ProfilUser:any){
return this.http.post('http://localhost:3000/register',ProfilUser)
}
//register user
getuserById(id:any){
  return this.http.get('http://localhost:3000/getuser/'+id)
}

deleteUser(id:any){
  return this.http.delete('http://localhost:3000/deleteUser/'+id)
}
updateUser(id:any,newprofile:any){
  return this.http.patch('http//localhost:3000/updateUser/'+id,newprofile)
}
getOneUserBydepartement(departement:any){
  return this.http.get('http://localhost:3000/getOneUserbydepartement/'+departement)
}
getOneUserByname(name:any){
  return this.http.get('http://localhost:3000/getOneUserbyname/'+name)
}

//*********************************************login employee*******************************************//
    loginEmployee(data:any){
      return this.http.post('http://localhost:3000/loginEmployee',data)
    }

    SaveDataEmployee(token:any){
      localStorage.setItem('token',token)
      localStorage.setItem('firstname',token.firstname)
      localStorage.setItem('lastname',token.lastname)
      localStorage.setItem('email',token.email)
      localStorage.setItem('departement',token.departement)
      localStorage.setItem('post',token.post)
      localStorage.setItem('DateDeNaissance',token.DateDeNaissance)
      localStorage.setItem('phone',token.phone)
      localStorage.setItem('ville',token.ville)
     

      this.ProfielEmployee.firstname=token.firstname
      this.ProfielEmployee.departement=token.departement
      this.ProfielEmployee.post=token.post
      this.ProfielEmployee.DateDeNaissance=token.DateDeNaissance
      this.ProfielEmployee.phone=token.phone
      this.ProfielEmployee.ville=token.ville
      this.loggedInEmp=true
   }
//===============================End-login-Employee================================//

// *************************************************Reunion*****************************************************************//
getReunion(){
  return this.http.get('http://localhost:3000/getReunion')
}
updateReunion(id:string,Reunion:any){
  return this.http.patch('http://localhost:3000/updateReunion/'+id,Reunion)
}
deleteReunion(id:any){
  return this.http.delete('http://localhost:3000/deleteReunion/'+id)
}
addReunion(Reunion:any){
  return this.http.post('http://localhost:3000/Add',Reunion)
}
//==============================================End-Reunion==============================================================//



//================================================demande-STAGE===========================================================/

getdemande(){
  return this.http.get('http://localhost:3000/getDemandeStage')
}
updateDemande(id:string,demande:any){
  return this.http.patch('http://localhost:3000/updateStageDemande/'+id,demande)
}
deleteDemande(id:any){
  return this.http.delete('http://localhost:3000/deleteStageDemande/'+id)
}
GetOneDemande(id:any){
  return this.http.get('http://localhost:3000/getDemandeStageById/'+id)
}
addDemande(demande:any){
  return this.http.post('http://localhost:3000/addDemandeStage',demande)
}
GetOneDemandebyemail(email:any){
  return this.http.get('http://localhost:3000/getDemandeStageByemail/'+email)
}



//================================================demande-STAGE===========================================================/

getdemandeEmploi(){
  return this.http.get('http://localhost:3000/getDemandeEmploi')
}
updateDemandeEmploi(id:string,demande:any){
  return this.http.patch('http://localhost:3000/updateEmploiDemande/'+id,demande)
}
deleteDemandeEmploi(id:any){
  return this.http.delete('http://localhost:3000/deleteEmploiDemande/'+id)
}
GetOneDemandeEmploi(id:any){
  return this.http.get('http://localhost:3000/getDemandeEmploiById/'+id)
}
addDemandeEmploi(demande:any){
  return this.http.post('http://localhost:3000/addDemandeEmploi',demande)
}




//=============================demande de congé===========================================
ajouterDemandeconge(demandeconge:any){
  return this.http.post('http://localhost:3000/addDemandeconge',demandeconge)
}

getdemandeConge(){
  return this.http.get('http://localhost:3000/getDemandeconge')
}
 
deleteDemandeconge(id:any){
  return this.http.delete('http://localhost:3000/deleteconge/'+id)
}
GetOneDemandeconge(id:any){
  return this.http.get('http://localhost:3000/getconge/'+id)
}


/*************************DemandeAccepter*********************************************************** */

ajouterDemandeAccepter(demandeAccepter:any){
  return this.http.post('http://localhost:3000/AjouterAccepter',demandeAccepter)
}

getdemandeAccepter(){
  return this.http.get('http://localhost:3000/getAccepter')
}
GetDemandeAccepterbyname(name:any){
  return this.http.get('http://localhost:3000/getOneAccepter/'+name)
}

GetDemandeAccepterbyemail(email:any){
  return this.http.get('http://localhost:3000/getOneAccepterEmail/'+email)
}
deleteDemandeAccepterbyid(id:any){
  return this.http.delete('http://localhost:3000/deleteDemandeAccepter/'+id)
}
GetOneDemandeAccepter(id:any){
  return this.http.get('http://localhost:3000/getOneAccepterbyid/'+id)
}



// 
getNumberEmployee(){
  return this.http.get('http://localhost:3000/countEmployee')
}
getNumber(){
  return this.http.get('http://localhost:3000/countuser')
}

getCountdemandeStage(){
  return this.http.get('http://localhost:3000/Stagecountdemande')
}
getNumberDemandeEmploi(){
  return this.http.get('http://localhost:3000/countdemandeEmploi')
}
getNumberDemandeConge(){
  return this.http.get('http://localhost:3000/countdemandeConge')
}
getNumberDemandeAccepter(){
  return this.http.get('http://localhost:3000/Acceptercountdemande')
}

public uploadfile(file: File) {
  let formParams = new FormData();
  formParams.append('file', file)
  return this.http.post('http://localhost:3000/uploadFile', formParams)
}


/*=======================================================conversation======================================================*/
ajoutermessage(message:any){
  return this.http.post('http://localhost:3000/AjouterMessage',message)
}

getMessage(){
  return this.http.get('http://localhost:3000/getMessage')
}

/*===================================================Formations======================================================================*/
getFormation(){
  return this.http.get('http://localhost:3000/getFormation')
}
AjouterFormation(data:any){
    return this.http.post('http://localhost:3000/AjouterFormation',data)
  }
deleteFormation(id:any){
  return this.http.delete('http://localhost:3000/deleteFormation/'+id)
}
updateFormation(id:string,newData:any){
  return this.http.patch('http://localhost:3000/updateFormation/'+id,newData)
}


}
