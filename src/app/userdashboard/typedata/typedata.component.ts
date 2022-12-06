import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { User } from '../../model/user'

@Component({
  selector: 'app-typedata',
  templateUrl: './typedata.component.html',
  styleUrls: ['./typedata.component.scss']
})
export class TypedataComponent implements OnInit {

  coldWaterValue ?: Number;
  constructor(private router: Router, private userService: UserService) {}


  ngOnInit(): void {
  }
  typeDataHandler(): void{
    this.router.navigateByUrl('/userdashboard')
  }


  sendDataHandler(coldWaterValue : String) {
    
    console.log(coldWaterValue);
    this.userService.sendWaterMeterData(this.coldWaterValue).subscribe(data =>{
        console.log(data);
      })
        
}
}
