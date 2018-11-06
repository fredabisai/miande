import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {ContactService} from "../contact.service";
import {default as swal, SweetAlertOptions} from "sweetalert2";
import {LoadingBarService} from "@ngx-loading-bar/core";
import {HttpErrorResponse} from "@angular/common/http";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";
import {EmbedVideoService} from "ngx-embed-video/dist";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contactForm: FormGroup;
  mahubiriUrl = "https://www.youtube.com/watch?v=4YBbx5nlrw0&t=28s";
  mahubiriVideoId = "4YBbx5nlrw0&t=28s";


  constructor(private fb: FormBuilder, private contact: ContactService, private loadingBar: LoadingBarService,
              private spinnerService: Ng4LoadingSpinnerService) {

      this.contactForm = fb.group({
          'contact_name': [null,Validators.required],
          'contact_email':[null,Validators.compose([Validators.required,Validators.email])],
          'contact_subject':[null,Validators.compose([Validators.required])],
          'contact_message':[null,Validators.compose([Validators.required,Validators.maxLength(200),
                               Validators.minLength(20)])]
      });

  }

  ngOnInit() {



  }
     player: YT.Player;
     id: string = "4YBbx5nlrw0";


     /*
       *Youtube Video for mahubiri
       *Displaying Youtube video
       * */
    savePlayer(player) {
        this.player = player;
        console.log('player instance', player);
    }
    onStateChange(event) {
        console.log('player state', event.data);
    }
    /* End of youtube video */

    /*
       *Sending Contact Message
       *Function for sending Conatct message in home page
     */

    sendContactMessage(event,contactform:NgForm){
        var contact_name = event.target.querySelector('#contact_name').value;
        var contact_email = event.target.querySelector('#contact_email').value;
        var contact_subject = event.target.querySelector('#contact_subject').value;
        var contact_message = event.target.querySelector('#contact_message').value;
       this.contact.sendContactMessage(contact_name,contact_email,contact_subject,contact_message).subscribe(data=>{
           if(data.success){
               //this.loadingBar.complete();
               this.spinnerService.hide();

               swal(
                   'Confirmation!',
                   'Message successfully sent!',
                   'success'
               );
               contactform.reset();
           }else{
               swal(
                   'Error',
                   'Message not sent, try again later!',
                   'error'
               );
           }
       }, (err: HttpErrorResponse)=>{
          // this.loadingBar.complete();
           swal(
               'Server Error',
               'Message not sent, try again later!',
               'error'
           );
           contactform.reset();

       })

    }


}
