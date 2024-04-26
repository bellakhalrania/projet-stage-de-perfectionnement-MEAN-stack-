import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-acceuil',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './acceuil.component.html',
  styleUrl: './acceuil.component.css'
})
export class AcceuilComponent {
  Array : any=[];
  constructor( private ds:DataService){ 
    this.ds.getReunion().subscribe(
      (data)=>{this.Array=data
     // console.log(data);
                        })
   }

}
