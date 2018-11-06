import { Component, OnInit } from '@angular/core';
import {UsersService} from "../users.service";
import {AbstractControl, FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {default as swal} from "sweetalert2";
import {AsnycValidatorsService} from "../asnyc-validators.service";

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

   roles = ""; //For getting roles
   positions = "";// For getting positions
   registerForm: FormGroup;

  constructor(private users: UsersService, private fb: FormBuilder) {
    /* Register User Form Validations */
    this.registerForm = fb.group({
        'firstname': [null, Validators.required],
        'lastname': [null,Validators.required],
        'email': [null,[Validators.required,Validators.email]],
        'phone_number': [null,Validators.compose([Validators.required,Validators.maxLength(10),Validators.minLength(10)])],
        'role': [null,Validators.required],
        'position': [null,Validators.required]
    });
    /* End of Register User Form Validations */
  }

  ngOnInit() {
      this.gettingRolesToSelect();
      this.gettingPositionsToSelect();
  }
  // //Function to validate if email is taken
  //   validateEmailNotTaken(control: AbstractControl) {
  //       return this.users.checkEmailNotTaken(control.value).map(res => {
  //           return res ? null : {emailTaken: true}
  //       })
  //   }

// Getting Roles for Select Options
  gettingRolesToSelect(){
    this.users.getRoles().subscribe(result => {
         if (result.success){
           this.roles = result.data;
         } else{
           this.roles = "Roles not found";
         }
    },()=>{
        this.roles = "Cannot contact with server"
    });
  }
    // Getting Positions for Select Options
    gettingPositionsToSelect(){
        this.users.getPositions().subscribe(result => {
            if (result.success){
                this.positions = result.data;
            }else{
              this.positions = "Positions not found";
            }
        },()=>{
            this.positions = "Cannot contact with server"
        });
    }
   //Register new User
    registerUser(event,registerform:NgForm){
          var firstname = event.target.querySelector('#firstname').value;
          var lastname = event.target.querySelector('#lastname').value;
          var email = event.target.querySelector('#email').value;
          var phone_number = event.target.querySelector('#phone_number').value;
          var user_role_id = event.target.querySelector('#role').value;
          var position_id = event.target.querySelector('#position').value;

          this.users.registerNewUser(firstname,lastname,email,phone_number,user_role_id,position_id).subscribe(result=>{
              if(result.success){
                  //this.loadingBar.complete();
                  swal(
                      'Confirmation!',
                      'User succefully registered!',
                      'success'
                  );
                  registerform.reset();
              }else{
                  swal(
                      'Error',
                      'User register failed, try again later!',
                      'error'
                  );
              }
          })
    }
}
