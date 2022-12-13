import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user'
import { UserService } from 'src/app/service/user.service'
import Swal from 'sweetalert2';
import { LoginMessage } from '../model/loginmessage';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  user = new User();
  backendUser?:User

  loginMessage = new LoginMessage();
  constructor(
    private  userService:UserService,
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit(): void {

  }

   loginUser(){
    //this.user.password = 
    this.userService.loginUser(this.user).subscribe(
      res => {
        const responseMessage = JSON.stringify(res)
        const succesMessage = JSON.stringify({message: 'SUCCESS'})
        const errorMessage = JSON.stringify({message: 'FAILED'})
        console.log(JSON.stringify(res));
        if (responseMessage == succesMessage) {
          if (this.user.roomNumber == 99)
           {
             this.router.navigateByUrl('/admindashboard')
            }
             else{
               this.router.navigateByUrl('/userdashboard')
             }
           }
        if (responseMessage == errorMessage) {
          Swal.fire(
            'Iinvalid roomnumber or password'
        )     
        this.user.roomNumber =0;
        this.user.password = '';
        }
          },
      err => {
        console.log(err);
        

      }
    )
   }
}
