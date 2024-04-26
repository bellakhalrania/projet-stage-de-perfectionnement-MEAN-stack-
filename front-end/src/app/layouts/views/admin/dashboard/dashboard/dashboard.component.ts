import { CUSTOM_ELEMENTS_SCHEMA, Component ,OnInit, AfterViewInit} from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthadminService } from '../../../services/authadmin.service';
import { ChartsubscribersComponent } from '../../chartsubscribers/chartsubscribers/chartsubscribers.component';
import { ChartdemandeComponent } from '../../chartdemande/chartdemande/chartdemande.component';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule,FormsModule,CommonModule,RouterOutlet,ChartsubscribersComponent,ChartdemandeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
 
  number:any
  Employeenumber:any
  demandeAccepter:any
  demandeStage:any
  demandeEmploi:any
  demandeConge:any
  Alldemande:any
  
  
  constructor(private router: Router, private ds: DataService) {}

  ngOnInit() {
    this.getNumber();
    this.getNumberEmployee();
    this.getNumberdemandeAccepter();
    //this.getNumberdemandeConge();
    //this.getNumberdemandeEmploi();
    this.getNumberdemandeStage();
    
  }
  
 
  
  getNumber() {
    setTimeout(() => {
      this.ds.getNumber().subscribe(
        (response) => {
          this.number = response;
          console.log(response);

        },
        (err: HttpErrorResponse) => {
          console.log(err)

        }
      );
    }, 100); // Mettez le délai souhaité en millisecondes ici
  }
  getNumberEmployee() {
    setTimeout(() => {
      this.ds.getNumberEmployee().subscribe((response) => {
          this.Employeenumber = response
          console.log(response);

        },
        (err: HttpErrorResponse) => {
          console.log(err)

        }
      )
    }, 200); // Mettez le délai souhaité en millisecondes ici
  }
  getNumberdemandeAccepter() {
    setTimeout(() => {
      this.ds.getNumberDemandeAccepter().subscribe((response) => {
          this.demandeAccepter = response
          console.log(response)
        },
        (err: HttpErrorResponse) => {
          console.log(err)

        })
    }, 300); // Mettez le délai souhaité en millisecondes ici
  }
  getNumberdemandeEmploi(){
    this.ds.getNumberDemandeEmploi().subscribe((response)=>{
      this.demandeEmploi=response
      console.log(response)
    },
    (err: HttpErrorResponse) => {
      console.log(err)
     
    })
  }
  getNumberdemandeStage(){
    setTimeout(() => {
    this.ds.getCountdemandeStage().subscribe((response)=>{
      this.demandeStage=response
      console.log(response)
    },
    (err: HttpErrorResponse) => {
      console.log(err)
     
    })
  }, 400);
  }
  getNumberdemandeConge(){
    this.ds.getNumberDemandeConge().subscribe((response)=>{
      this.demandeConge=response
      console.log(response)
    },
    (err: HttpErrorResponse) => {
      console.log(err)
     
    })
  }

  

  



}
