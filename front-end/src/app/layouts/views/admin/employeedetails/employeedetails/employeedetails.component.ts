import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../services/data.service';

import { HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { jsPDF} from 'jspdf';
import 'jspdf-autotable';
@Component({
  selector: 'app-employeedetails',
  standalone: true,
  imports: [FormsModule,CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './employeedetails.component.html',
  styleUrl: './employeedetails.component.css'
})
export class EmployeedetailsComponent {
  Id=''
  dataObject:any
  messageErr: string = '';
  constructor(private route:ActivatedRoute,private ds:DataService){
    this.route.params.subscribe((params: { [key: string]: string }) => {
      this.Id = params['id'];
    })
    this.ds.getOneemployee(this.Id).subscribe(
      (response) => (this.dataObject = response),
      (err: HttpErrorResponse) => {
        console.log(err)
        this.messageErr = `we dont have this employee`
      }
    );
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
      ['Nom de famille', this.dataObject.lastname],
      ['Prénom', this.dataObject.firstname],
      ['Adresse e-mail', this.dataObject.email],
      ['Numéro de téléphone', this.dataObject.phone],
      ['Date de naissance', this.dataObject.DateDeNaissance],
      ['Adresse', this.dataObject.ville],
      ['departement', this.dataObject.departement],
      ['post', this.dataObject.post],
    ];
  
    // Ajouter l'en-tête du tableau
    doc.setFontSize(15);
    doc.text('Informations:', margins.left, 40);
    
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
    doc.save('information.pdf');
  }

}
declare module 'jspdf' {
  interface jsPDF {
    autoTable: (options: any) => jsPDF;
  }
}