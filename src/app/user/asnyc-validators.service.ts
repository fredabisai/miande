import { Injectable } from '@angular/core';
import {UsersService} from "./users.service";
import {AbstractControl} from "@angular/forms";

@Injectable()
export class AsnycValidatorsService {

  constructor(private users: UsersService) { }
  static createValidator(users: UsersService){

  }

}
