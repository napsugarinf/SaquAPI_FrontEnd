import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss']
})
export class AdmindashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  changePasswordClickHandler(): void {
    this.router.navigateByUrl('/changepassword')
  }

}
