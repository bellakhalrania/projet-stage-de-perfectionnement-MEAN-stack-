
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  Array : any=[];
 

  constructor(private ds:DataService) 
  {
  this.ds.getNews().subscribe(
    (data)=>{this.Array=data
   // console.log(data);
                      },(error: HttpErrorResponse)=>{
                          console.log(error.message)
                      })
  
  }

 
}
