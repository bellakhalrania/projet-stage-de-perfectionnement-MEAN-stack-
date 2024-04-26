import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-message-admin',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './message-admin.component.html',
  styleUrl: './message-admin.component.css'
})
export class MessageAdminComponent {
  datademande : any=[];
  demande:any
  messageErr=''

  constructor(private router: Router) 
  {
  
  
}
isLinkActive(route: string): boolean {
  return this.router.isActive(route, true);
}

}
