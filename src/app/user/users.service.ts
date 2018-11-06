import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Http, RequestOptions} from "@angular/http";

import { filter } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/delay';
import {Observable} from "rxjs";



interface data{
  success: boolean;
  data: any;
}

@Injectable()
export class UsersService {

  private apiUrl = "http://127.0.0.1:8000/api/";

  constructor(private httpClient: HttpClient, private http: Http) { }
  /* Function to get all roles from url*/
  getRoles(){
    var reqHeader = new HttpHeaders({'No-Auth': 'True'});
    return this.httpClient.get<data>(this.apiUrl+'get_all_roles');
  }
    /* Function to get all positions from url*/
  getPositions(){
      var reqHeader = new HttpHeaders({'No-Auth': 'True'});
      return this.httpClient.get<data>(this.apiUrl+'get_all_positions');
  }
    /*
     * New User
     * Function to create new user from url
     * */
 registerNewUser(firstname,lastname,email,phone_number,user_role_id,position_id){

  return this.httpClient.post<data>(
       this.apiUrl+'userRegister',
       {firstname,lastname,email,phone_number,user_role_id,position_id});

 }
 /*
 *User Authentication
 * This is user Authentication for login
 * */
 userAuthentication(phone_number,password){
     var reqHeader = new HttpHeaders({'No-Auth': 'True'});
     return this.httpClient.post(
         this.apiUrl+'userLogin',
         {phone_number,password},
         {headers: reqHeader});
 }
 /*
 * User Profile Data
 * Getting Data for the login user
 * */
 getLoginUserData(){
     return this.httpClient.get(this.apiUrl+'getUserDetails');
 }
 /*
 *Logout
  */
 userLogout(){
     return this.httpClient.get<data>(this.apiUrl+'me/logout');
 }



}
