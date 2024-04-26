import { Routes } from '@angular/router';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthAdminLayoutComponent } from './layouts/auth-admin-layout/auth-admin-layout.component';
import { StartloginComponent } from './layouts/startlogin/startlogin.component';
import { EmployeeLayoutComponent } from './layouts/employee-layout/employee-layout.component';
import { CompteUserLayoutComponent } from './layouts/compte-user-layout/compte-user-layout.component';
import { DemandeCongeComponent } from './layouts/views/admin/demandes/demande-congé/demande-conge/demande-conge.component';
import { StagedemandeComponent } from './layouts/views/admin/demandes/stagedemande/stagedemande/stagedemande.component';
import { DemandeEmploiComponent } from './layouts/views/admin/demandes/demande-emploi/demande-emploi/demande-emploi.component';
import { MessageAdminComponent } from './layouts/views/admin/message-admin/message-admin/message-admin.component';



export const routes: Routes =[ 
    {path:'',component:UserLayoutComponent,children:[
        {path:'',loadChildren:()=>import('./layouts/views/user/home/home.module').then(m=>m.HomeModule)},
        
    ]},
    {path:'user',component:CompteUserLayoutComponent,children:[
        {path:'Acceuil',loadChildren:()=>import('./layouts/views/user/acceuil-user/acceuil-user.module').then(m=>m.AcceuilUserModule)},
        {path:'demande-stage',loadChildren:()=>import('./layouts/views/user/demande-stage/demande-stage.module').then(m=>m.DemandeStageModule)},
        {path:'demande-travaille',loadChildren:()=>import('./layouts/views/user/demande-travaille/demande-travaille.module').then(m=>m.DemandeTravailleModule)},
        {path:'userprofil',loadChildren:()=>import('./layouts/views/user/profil-user/profil-user.module').then(m=>m.ProfilUserModule)},
        {path:'consultdemande',loadChildren:()=>import('./layouts/views/user/consult-demande/consult-demande.module').then(m=>m.ConsultDemandeModule)},
        
    ]},
    {path:'message',component:MessageAdminComponent,
        children: [
           
            {path:'demandeStage',loadChildren:()=>import('./layouts/views/admin/demandes/stagedemande/stagedemande.module').then(m=>m.STAGEdemandeModule)},
            {path:'demandeEmploi',loadChildren:()=>import('./layouts/views/admin/demandes/demande-emploi/demande-emploi.module').then(m=>m.DemandeEmploiModule)},
            {path:'conge',loadChildren:()=>import('./layouts/views/admin/demandes/demande-congé/demande-congé.module').then(m=>m.DemandeCongéModule)},
            {path:'Accepter',loadChildren:()=>import('./layouts/views/admin/demandes/demande-accepter/demande-accepter.module').then(m=>m.DemandeAccepterModule)},
        ] 
        },


    {path:'admin',component:AdminLayoutComponent,children:[
       
        {path:'dashboard',loadChildren:()=>import('./layouts/views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
        {path:'chartsubscribers',loadChildren:()=>import('./layouts/views/admin/chartsubscribers/chartsubscribers.module').then(m=>m.ChartsubscribersModule)},
        {path:'allemployees',loadChildren:()=>import('./layouts/views/admin/allemployees/allemployees.module').then(m=>m.AllemployeesModule)},
        {path:'addemployees',loadChildren:()=>import('./layouts/views/admin/addemployees/addemployees.module').then(m=>m.AddemployeesModule)},
        {path:'employeedetails/:id',loadChildren:()=>import('./layouts/views/admin/employeedetails/employeedetails.module').then(m=>m.EmployeedetailsModule)},
        {path:'formation',loadChildren:()=>import('./layouts/views/admin/formation/formation.module').then(m=>m.FormationModule)},
        {path:'reunion',loadChildren:()=>import('./layouts/views/admin/réunion/réunion.module').then(m=>m.RéunionModule)},
        {path:'profil',loadChildren:()=>import('./layouts/views/admin/profil-admin/profil-admin.module').then(m=>m.ProfilAdminModule)},
        {path:'offre',loadChildren:()=>import('./layouts/views/admin/offre/offre.module').then(m=>m.OffreModule)},
        {path:'user',loadChildren:()=>import('./layouts/views/admin/liste-user/liste-user.module').then(m=>m.ListeUserModule)}
    ]},{
        path:'employee',component:EmployeeLayoutComponent,children:[
            {path:'Acceuil',loadChildren:()=>import('./layouts/views/EmpServices/acceuil/acceuil.module').then(m=>m.AcceuilModule)},
            {path:'demande-conge',loadChildren:()=>import('./layouts/views/EmpServices/demande-conge/demande-conge.module').then(m=>m.DemandeCongeModule)},
            {path:'consult',loadChildren:()=>import('./layouts/views/EmpServices/consultdemande/consultdemande.module').then(m=>m.ConsultdemandeModule)},
            {path:'message-employee',loadChildren:()=>import('./layouts/views/EmpServices/message/message.module').then(m=>m.MessageModule)},
            {path:'profil-employee',loadChildren:()=>import('./layouts/views/EmpServices/profil-employee/profil-employee.module').then(m=>m.ProfilEmployeeModule)}

        ]
    }
   ,
        {path:'startlogin',component:StartloginComponent},
        {path:'admin/login',component:AuthAdminLayoutComponent},
        {path:'loginEmployee',loadChildren:()=>import('./layouts/views/user/login-employee/login-employee.module').then(m=>m.LoginEmployeeModule)},
        {path:'loginuser',loadChildren:()=>import('./layouts/views/user/loginuser/loginuser.module').then(m=>m.LoginuserModule)},
        {path:'register',loadChildren:()=>import('./layouts/views/user/register/register.module').then(m=>m.RegisterModule)}
];
