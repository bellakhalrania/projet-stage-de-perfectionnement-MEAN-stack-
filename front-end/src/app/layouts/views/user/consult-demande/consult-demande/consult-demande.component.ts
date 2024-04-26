import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { jsPDF} from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-consult-demande',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './consult-demande.component.html',
  styleUrls: ['./consult-demande.component.css']
})
export class ConsultDemandeComponent implements OnInit {
  username: any;
  role: any;
  email: any;
  emaill: any;
  phone:any;
  departement:any;
  type:any;
  adress:any;
  dateNaissance:any
  typeStage:any

  dataAccepter: any;
  dataArray: any;
  //dataAccepter: any = [];
  dataAttend: any = [];
  message: string = '';
  messageA: string = '';

  constructor(private ds: DataService) { }

  ngOnInit(): void {
    if (typeof localStorage !== "undefined") {
      try {
        this.username=localStorage.getItem('username')
        this.email = localStorage.getItem('email');
        console.log("email:",this.email);
        this.emaill = localStorage.getItem('emaill');
        this.phone=localStorage.getItem('phone')
        this.adress=localStorage.getItem('adress')
        this.departement=localStorage.getItem('departement')
        this.type=localStorage.getItem('type')
        this.dateNaissance=localStorage.getItem('dateNaissance')



        

        this.ds.GetDemandeAccepterbyemail(this.email).subscribe((res: any) => {
          this.dataAccepter = res;
         
          console.log(this.dataAccepter);
          if (this.dataAccepter.length === 0) {
            this.message = "Vous n'avez aucune réponse.";
          } else {
          
            this.dataAccepter.forEach((item: any) => {
              this.typeStage = item.type; 
              console.log(this.typeStage); 
            });
          }
        });
        
      } catch (error) {
        console.error("Erreur lors de l'accès à localStorage:", error);
      }
    }
  }

 

  generatePDF() {
    const doc = new jsPDF();
    const margins ={
      top:30,
      bottom:30,
      left :10,
      right:10
    }
    const data = [
      ['Nom et Prénom', this.username],
      ['Adresse e-mail', this.email],
      ['Numéro de téléphone', this.phone],
      ['Date de naissance', this.dateNaissance],
      ['Adresse', this.adress],
      ['type de stage',this.typeStage],
      ['réponse','Accepté'],
      ['departement', this.departement],
      ['type', this.type],
     
      
    ];
  
    // Ajouter l'en-tête du tableau
    doc.setFontSize(15);
    doc.text('', margins.left, 40);
    
    // Ajouter le tableau
    doc.autoTable({
      startY: 50,
      head: [['Champ', 'Valeur']],
      body: data,
      theme: 'plain'
    });
  
    // Ajouter les images
    const img = new Image();
    const img2 = new Image();
    img.src = './assets/user/img/logo.png';
    img2.src = './assets/user/img/logo2.png';
  
    doc.addImage(img,'png',160,10,40,30);
    doc.addImage(img2,'png',150,100,50,50);
    
  
    // Save the PDF
    doc.save('demande.pdf');
  }

}


declare module 'jspdf' {
  interface jsPDF {
    autoTable: (options: any) => jsPDF;
  }
}
