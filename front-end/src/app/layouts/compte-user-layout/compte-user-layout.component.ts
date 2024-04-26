import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DataService } from '../views/services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-compte-user-layout',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './compte-user-layout.component.html',
  styleUrl: './compte-user-layout.component.css'
})
export class CompteUserLayoutComponent {
  username:any
  data: any[] | null = null;
  email:any;

  constructor(private ds: DataService){
    if (typeof localStorage !== 'undefined') {
      this.username = localStorage.getItem('username');
      this.email = localStorage.getItem('email');
    } else {
      // Handle the case where localStorage is not available
      this.username = 'FallbackUsername'; // Replace with an appropriate fallback value
    }
    this.ds.GetOneDemandebyemail(this.email).subscribe((res: any) => {
      this.data = res;
      
    });
    
  }

}
