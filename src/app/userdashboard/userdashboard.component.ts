import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { User } from '../model/user';


@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.scss']
})
export class UserdashboardComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  uploadClickHandler(): void{
    this.router.navigateByUrl('/userdashboard/upload')
  }
  logoutClickHandler(): void{
    LoginComponent.roomNr =0;
    this.router.navigateByUrl('/login')
  }
}
