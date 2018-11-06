import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UsersService} from "../users.service";


@Component({
  selector: 'app-userwrapper',
  templateUrl: './userwrapper.component.html',
  styleUrls: ['./userwrapper.component.css'],

})
export class UserwrapperComponent implements OnInit {

  firstname: string = null;
  lastname: string = null;


  constructor(private router: Router, private users: UsersService) { }

  ngOnInit() {
    this.users.getLoginUserData().subscribe((result:any)=>{
        this.firstname = result.data.firstname;
        this.lastname = result.data.lastname;
    })
  }
  logOut(){
      localStorage.removeItem('userToken');
    this.users.userLogout().subscribe((result: any)=>{
        this.router.navigate(['/Mshiriki'])
    });

  }


}
