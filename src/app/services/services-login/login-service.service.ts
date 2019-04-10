import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from 'src/app/models/queueing_models';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  formData: Users;

  readonly rootUrl = "http://192.168.100.16:50870/api/";

  constructor(private http: HttpClient) { }

  //post login function
  postLogin(formData: Users) {
    return this.http.post(this.rootUrl + 'PostLogin', formData);
  }

}
