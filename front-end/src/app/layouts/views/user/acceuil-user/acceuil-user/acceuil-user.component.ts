import { Component } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-acceuil-user',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './acceuil-user.component.html',
  styleUrl: './acceuil-user.component.css'
})
export class AcceuilUserComponent {
  dataFormation : any[] =[];
  constructor(private ds: DataService) {
    this.ds.getFormation().subscribe((res: any)=>{
      this.dataFormation=res;
    })

   }

}
