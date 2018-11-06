import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {UsersService} from "../user/users.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-mshiriki',
  templateUrl: './mshiriki.component.html',
  styleUrls: ['./mshiriki.component.css']
})
export class MshirikiComponent implements OnInit {
  loginForm: FormGroup; //FormGroup for login
  isLoginError: boolean = false;
  phone_pattern = "/^[0-9]*$/";
  constructor(private fb: FormBuilder, private users: UsersService,private router: Router) {
    this.loginForm = fb.group({
        'phone_number': [null, Validators.compose([Validators.required])],
        'password': [null,Validators.required]
    });
  }
  ngOnInit() {
  }
  //Function to handle login
  makeLogin(event,loginform:NgForm){
    var phone_number = event.target.querySelector('#phone_number').value;
    var password = event.target.querySelector('#password').value;
    console.log(phone_number,password);
    this.users.userAuthentication(phone_number,password).subscribe((result: any)=>{
       if (result.success){
           localStorage.setItem('userToken',result.data.token);
          this.router.navigate(['user/dashboard']);
       }
    },
        (err: HttpErrorResponse)=>{
               this.isLoginError = true;
        });
  }

}
