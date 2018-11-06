import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private spinnerService: Ng4LoadingSpinnerService){}
}
