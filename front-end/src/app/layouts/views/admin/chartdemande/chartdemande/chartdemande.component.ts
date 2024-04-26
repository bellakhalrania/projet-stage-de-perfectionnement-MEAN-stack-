import { Component } from '@angular/core';
import { ChartData } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
import { DataService } from '../../../services/data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-chartdemande',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './chartdemande.component.html',
  styleUrls: ['./chartdemande.component.css']
})
export class ChartdemandeComponent {
  demandeAccepter: any;
  demandeStage: any;
  demandeEmploi: any;
  demandeConge: any;
  
  

  constructor(private ds: DataService) {
    setTimeout(() => {
      this.getNumberdemandeAccepter();
    }, 800);
    setTimeout(() => {
      this.getNumberdemandeEmploi();
    }, 700);
    setTimeout(() => {
      this.getNumberdemandeStage();
    }, 600);
    setTimeout(() => {
      this.getNumberdemandeConge();
    }, 900);
    
  }

  demandeData: ChartData<'doughnut'> = {
    labels: ['demande stage', 'demande Emploi', 'demande congé', 'demande Accepté'],
    datasets: [{
      data: [12,50,41,1]
    }]
  };

  getNumberdemandeAccepter() {
    this.ds.getNumberDemandeAccepter().subscribe(
      (response) => {
        this.demandeAccepter = response;
        this.demandeData.datasets[0].data[3] = this.demandeAccepter;
       
       
       
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }

  getNumberdemandeEmploi() {
    this.ds.getNumberDemandeEmploi().subscribe(
      (response) => {
        this.demandeEmploi = response;
        this.demandeData.datasets[0].data[1] = this.demandeEmploi;
        
        
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }

  getNumberdemandeStage() {
    this.ds.getCountdemandeStage().subscribe(
      (response) => {
        this.demandeStage = response;
        this.demandeData.datasets[0].data[0] = this.demandeStage;
        
        
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }

  getNumberdemandeConge() {
    this.ds.getNumberDemandeConge().subscribe(
      (response) => {
        this.demandeConge = response;
        this.demandeData.datasets[0].data[2] = this.demandeConge;
       
       
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }

  
}
