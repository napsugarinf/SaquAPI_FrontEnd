import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component'
import { AppComponent } from './app.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { TypedataComponent } from './userdashboard/typedata/typedata.component';
import { UploadComponent } from './userdashboard/upload/upload.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'userdashboard', component: UserdashboardComponent},
  { path: 'userdashboard/typedata', component: TypedataComponent},
  { path: 'userdasboard/upload',component: UploadComponent },
  { path: '**', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
