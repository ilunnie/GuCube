import { Injectable } from '@angular/core';
import { UserData } from './dto/user-data';
import { ApiService } from './api.service';
import { JwtData } from './dto/jwt-data';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: ApiService) { }

  register(data: UserData, callback: any)
  {
    this.http.post('user/signup', data)
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

  getManaged(data: JwtData, callback: any)
  {
    this.http.post('user/managed', data)
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
