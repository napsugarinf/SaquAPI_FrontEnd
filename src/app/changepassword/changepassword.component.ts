import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { UserService } from '../service/user.service';
import { User } from '../model/user'

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {
  user = new User();

  constructor(private  userService:UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  savePasswordClickHandler():void{
    this.userService.savePassword(this.user)
    .subscribe(data =>{
      console.log(data);
    })
  }

}
