import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UploadComponent } from './userdashboard/upload/upload.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { RoomdataComponent } from './admindashboard/roomdata/roomdata.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ErrorComponent } from './error/error.component';
//import { AuthenticationService } from './_services/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    UserdashboardComponent,
    UploadComponent,
    AdmindashboardComponent,
    RoomdataComponent,
    ChangepasswordComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [
   // AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
