import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-employee-layout',
  standalone: true,
  imports: [ RouterModule,RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './employee-layout.component.html',
  styleUrl: './employee-layout.component.css'
})
export class EmployeeLayoutComponent {
  firstname:any
  constructor(){
    if (typeof localStorage !== 'undefined') {
      this.firstname = localStorage.getItem('firstname');
    } else {
      // Handle the case where localStorage is not available
      this.firstname = 'FallbackUsername'; // Replace with an appropriate fallback value
    }
  }

}
