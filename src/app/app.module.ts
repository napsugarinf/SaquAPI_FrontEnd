import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UploadComponent } from './userdashboard/upload/upload.component';
import { TypedataComponent } from './userdashboard/typedata/typedata.component';
//import { AuthenticationService } from './_services/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    UserdashboardComponent,
    UploadComponent,
    TypedataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
   // AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
