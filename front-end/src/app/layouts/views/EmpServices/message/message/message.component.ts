import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, NO_ERRORS_SCHEMA,ElementRef,  AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../../services/data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule,FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  selectedEmoji: string = '👍';
  text: string = '';
  Array:any;
  dataArray : any=[];
  file: File | null = null;
  firstname:any
  name:any;
  heureActuelle: any;
  searchname:any
  searchTerm: any
  messageErr=''

  messageSuccess=''
 constructor(
  private elementRef: ElementRef,private ds: DataService){
    if (typeof localStorage !== 'undefined') {
      this.firstname = localStorage.getItem('firstname');
      this.name=this.firstname;
    } else {
      // Handle the case where localStorage is not available
      this.firstname = 'FallbackUsername'; // Replace with an appropriate fallback value
    }
    
    this.getmessage();
    this.getemployee();
    
 
 }
 getmessage(){
  setTimeout(() => {
  this.ds.getMessage().subscribe(
    (data)=>{
    this.Array=data
    this.scrollToBottom();
    console.log(data);
    })
  },50);
 }
 getemployee(){
  setTimeout ( ()=>{
    this.ds.getAllemployees().subscribe((data)=>
    {
     this.dataArray=data;
     console.log(data)
    },
    (err: HttpErrorResponse) => {
      console.log(err)

    })
  },200)
 }

 AjouterMessage(f: any) {
 
  const data = f.value;

 
  data.text =  data.text;
  data.username = this.firstname;
  this.updateHeureActuelle(); // Appel de la méthode pour mettre à jour l'heure actuelle
  data.date = this.heureActuelle;
  console.log(this.heureActuelle);

  this.ds.ajoutermessage(data).subscribe(
    response => {
      console.log(response);
      this.scrollToBottom();
      this.Array.push(response);
      this.scrollToBottom();
     
    },
    (err: HttpErrorResponse) => {
      console.log(err);
    }
  );
}
scrollToBottom(): void {
  const element = this.elementRef.nativeElement.querySelector('#chatliste');
  if (element) {
    element.scrollTop = element.scrollHeight;
  }
}
updateHeureActuelle() {
  const maintenant = new Date();
  const heure = maintenant.getHours().toString().padStart(2, '0');
  const minute = maintenant.getMinutes().toString().padStart(2, '0');
  const seconde = maintenant.getSeconds().toString().padStart(2, '0');
  this.heureActuelle = `${heure}:${minute}:${seconde}`;
}





 
 onFilechange(event: any) {
   console.log(event.target.files[0])
   this.file = event.target.files[0]
 }
 
 upload() {
   if (this.file) {
     this.ds.uploadfile(this.file).subscribe(resp => {
       alert("Uploaded")
     })
   } else {
     alert("Please select a file first")
   }
 }
 updateText() {
  this.text = this.selectedEmoji;
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



 

}
