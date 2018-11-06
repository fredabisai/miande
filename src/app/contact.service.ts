import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

interface contactdata {
    success: boolean;
}

@Injectable()
export class ContactService {
   private apiUrl = "http://127.0.0.1:8000/api/";
  constructor(private httpClient: HttpClient) { }


  sendContactMessage(contact_name,contact_email,contact_subject,contact_message){
      var reqHeader = new HttpHeaders({'No-Auth': 'True'});
     return this.httpClient.post<contactdata>(
         this.apiUrl+"contact_message_create",
         {contact_name,contact_email,contact_subject,contact_message},
         {headers: reqHeader} );
  }

}
