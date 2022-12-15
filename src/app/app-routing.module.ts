import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component'
import { AppComponent } from './app.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UploadComponent } from './userdashboard/upload/upload.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { RoomdataComponent } from './admindashboard/roomdata/roomdata.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'userdashboard', component: UserdashboardComponent},
  { path: 'userdashboard/upload',component: UploadComponent },
  { path: 'changepassword', component: ChangepasswordComponent},
  { path: 'admindashboard', component: AdmindashboardComponent},
  { path: 'admindashboard/roomdata', component: RoomdataComponent},
  { path: 'error', component: ErrorComponent},
  { path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
