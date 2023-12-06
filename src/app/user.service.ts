import { Injectable } from '@angular/core';
import { UserData } from './dto/user-data';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: ApiService) { }

  register(data: UserData, callback: any)
  {
    this.http.post('user/register', data)
      .subscribe(
        response => {
          callback(response)
        },
        error => {
          callback(error)
        }
      )
  }

  login(data: UserData, callback: any)
  {
    console.log(data)
    this.http.post('user/login', data)
      .subscribe(
        response => {
          callback(response)
        },
        error => {
          callback(error)
        }
      )
  }
}
