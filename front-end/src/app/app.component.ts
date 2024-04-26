import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LayoutsModule } from './layouts/layouts.module';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthAdminLayoutComponent } from './layouts/auth-admin-layout/auth-admin-layout.component';
import { StartloginComponent } from './layouts/startlogin/startlogin.component';
import { LoginEmployeeComponent } from './layouts/views/user/login-employee/login-employee/login-employee.component';
import { EmployeeLayoutComponent } from './layouts/employee-layout/employee-layout.component';
import { AcceuilComponent } from './layouts/views/EmpServices/acceuil/acceuil/acceuil.component';
import { MessageAdminComponent } from './layouts/views/admin/message-admin/message-admin/message-admin.component';
import { OffreComponent } from './layouts/views/admin/offre/offre/offre.component';
import { ReunionComponent } from './layouts/views/admin/réunion/reunion/reunion.component';
import { MessageComponent } from './layouts/views/EmpServices/message/message/message.component';
import { ProfilEmployeeComponent } from './layouts/views/EmpServices/profil-employee/profil-employee/profil-employee.component';
import { DemandeCongeComponent } from './layouts/views/EmpServices/demande-conge/demande-conge/demande-conge.component';
import { CompteUserLayoutComponent } from './layouts/compte-user-layout/compte-user-layout.component';
import { AcceuilUserComponent } from './layouts/views/user/acceuil-user/acceuil-user/acceuil-user.component';
import { DemandeStageComponent } from './layouts/views/user/demande-stage/demande-stage/demande-stage.component';
import { DemandeTravailleComponent } from './layouts/views/user/demande-travaille/demande-travaille/demande-travaille.component';
import { ProfilUserComponent } from './layouts/views/user/profil-user/profil-user/profil-user.component';
import { ListeUserComponent } from './layouts/views/admin/liste-user/liste-user/liste-user.component';
import { DemandeEmploiComponent } from './layouts/views/admin/demandes/demande-emploi/demande-emploi/demande-emploi.component';
import { StagedemandeComponent } from './layouts/views/admin/demandes/stagedemande/stagedemande/stagedemande.component';
import { DemandeAccepterComponent } from './layouts/views/admin/demandes/demande-accepter/demande-accepter/demande-accepter.component';
import { ConsultDemandeComponent } from './layouts/views/user/consult-demande/consult-demande/consult-demande.component';
import { FormationComponent } from './layouts/views/admin/formation/formation/formation.component';
import { ChartsubscribersComponent } from './layouts/views/admin/chartsubscribers/chartsubscribers/chartsubscribers.component';
import { ConsultdemandeComponent } from './layouts/views/EmpServices/consultdemande/consultdemande/consultdemande.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,LayoutsModule,
            AdminLayoutComponent,UserLayoutComponent,
            HttpClientModule,FormsModule,AuthAdminLayoutComponent,
            StartloginComponent,LoginEmployeeComponent,EmployeeLayoutComponent,
            AcceuilComponent,MessageAdminComponent,OffreComponent,
            ReunionComponent,MessageComponent,ProfilEmployeeComponent,
            DemandeCongeComponent,CompteUserLayoutComponent,AcceuilUserComponent,
            DemandeStageComponent,DemandeTravailleComponent,ProfilUserComponent,
            ListeUserComponent,DemandeCongeComponent,StagedemandeComponent , 
            DemandeEmploiComponent,DemandeAccepterComponent,ConsultDemandeComponent,
          FormationComponent,ChartsubscribersComponent,ConsultdemandeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularproject';
}
