import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { KanisaComponent } from './kanisa/kanisa.component';
import { MshirikiComponent } from './mshiriki/mshiriki.component';
import { MatangazoComponent } from './matangazo/matangazo.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { HomewrapperComponent } from './homewrapper/homewrapper.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ContactService} from "./contact.service";
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import {LoadingBarModule} from "@ngx-loading-bar/core";
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import {EmbedVideo} from "ngx-embed-video/dist";
import {Http, HttpModule} from "@angular/http";
import {YoutubePlayerModule} from "ng2-youtube-player";
import { UserwrapperComponent } from './user/userwrapper/userwrapper.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AdduserComponent } from './user/adduser/adduser.component';
import {UsersService} from "./user/users.service";
import {AuthGuard} from "./auth/auth.guard";
import {AuthInterceptor} from "./auth/auth.interceptor";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    KanisaComponent,
    MshirikiComponent,
    MatangazoComponent,
    PagenotfoundComponent,
    WrapperComponent,
    HomewrapperComponent,
    DashboardComponent,
    UserwrapperComponent,
    AdduserComponent
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      SweetAlert2Module.forRoot(),
      LoadingBarModule.forRoot(),
      Ng4LoadingSpinnerModule.forRoot(),
      LoadingBarHttpClientModule,
      YoutubePlayerModule,
      HttpModule,



  ],
  providers: [
      ContactService,
      UsersService,
      AuthGuard,
      {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
