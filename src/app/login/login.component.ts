import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user'
import { UserService } from 'src/app/service/user.service'
//import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  user = new User();
  backendUser?:User

  constructor(
    private  userService:UserService,
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit(): void {

  }

  loginClickHandler(){

    this.userService.currentUser(this.user)
    .subscribe(data =>{
      console.log(data);
      this.backendUser=data;
    })
    if (this.user.roomNumber==99 && this.user.password =='bencemester')
    {
      this.router.navigateByUrl('/admindashboard')
    }
    else{
      this.router.navigateByUrl('/userdashboard')
    }
   
  }
   
}
