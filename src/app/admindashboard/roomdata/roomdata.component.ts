import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';

import { AdmindashboardService } from '../../service/admindashboard.service';

@Component({
  selector: 'app-roomdata',
  templateUrl: './roomdata.component.html',
  styleUrls: ['./roomdata.component.scss']
})
export class RoomdataComponent implements OnInit {
  selectRoomNumber?:Number;

  constructor(
    private router: Router,
    private apiService:AdmindashboardService
  ) { }

  ngOnInit(): void {
    this.selectRoomNumber=this.apiService.getSelectRoomNumber();
    console.log(this.selectRoomNumber);
  }

}
