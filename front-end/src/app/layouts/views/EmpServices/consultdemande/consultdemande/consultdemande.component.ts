import { Component } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-consultdemande',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './consultdemande.component.html',
  styleUrl: './consultdemande.component.css'
})
export class ConsultdemandeComponent {
  username: any;
  role: any;
  email: any;
  emaill: any;
  dataAccepter: any[] = [];
  //dataAccepter: any = [];
  dataAttend: any = [];
  message: string = '';
  messageA: string = '';

  constructor(private ds: DataService) { }

  ngOnInit(): void {
    if (typeof localStorage !== "undefined") {
      try {
        this.email = localStorage.getItem('email');
        console.log("email:",this.email);
        this.emaill = localStorage.getItem('emaill');
        

        this.ds.GetDemandeAccepterbyemail(this.email).subscribe((res: any) => {
          this.dataAccepter = res;
          console.log(this.dataAccepter);
          if (this.dataAccepter.length === 0) {
            this.message = "Vous n'avez aucune réponse.";
          }
        });
        
      } catch (error) {
        console.error("Erreur lors de l'accès à localStorage:", error);
      }
    }
  }

}
