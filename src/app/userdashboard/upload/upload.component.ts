import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service'
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
// Variable to store shortLink from api response
shortLink: string = "";
loading: boolean = false; // Flag variable
file: any = null; // Variable to store file
  constructor( private userService: UserService) { }

  ngOnInit(): void {

  }
  // photoUploadHandler(): void{
  //   this.router.navigateByUrl('/userdashboard')
  // }
  // On file Select
  onChange(event: any) {
    this.file = event.target.files[0];
}

// OnClick of button Upload
photoUploadHandler() {
    this.loading = !this.loading;
    console.log(this.file);
    this.userService.uploadPhoto(this.file).subscribe(
        (event: any) => {
            if (typeof (event) === 'object') {

                // Short link via api response
                this.shortLink = event.link;

                this.loading = false; // Flag variable 
            }
        }
    );
}





}
