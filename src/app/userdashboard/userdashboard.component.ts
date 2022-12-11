import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    this.router.navigateByUrl('/login')
  }
}
