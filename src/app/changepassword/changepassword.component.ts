import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


import { UserService } from '../service/user.service';
import { User } from '../model/user';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {
  user = new User();
  confirmPassword = ""

  constructor(private  userService:UserService,
    private router: Router) { 
    }

  ngOnInit(): void {
    if(LoginComponent.roomNr!=99){
      this.router.navigateByUrl('/error');
    }
  }

  savePasswordClickHandler():void{
    if(this.user.roomNumber!==undefined && this.user.roomNumber>=100 && this.user.roomNumber<=620){
      if(this.user.password===this.confirmPassword){
        this.userService.savePassword(this.user)
        .subscribe(data =>{
          //console.log(data);
          Swal.fire(
            'The modification is '+ data.message)
        })
      }
      else{
        Swal.fire(
          'Passwords don`t match!')
      }
    }
    else{
      Swal.fire(
        'Room '+this.user.roomNumber+' does not exist!')
    }
    
  }

}
