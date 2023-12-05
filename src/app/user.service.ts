import { Injectable } from '@angular/core';
import { ClientData } from './dto/client-data';
import { ApiService } from './api.service';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: ApiService) { }

  register(data: ClientData)
  {
    this.http.post('user/register', data)
      .subscribe(response => console.log(response))
  }

  login(data: ClientData, callback: any)
  {
    this.http.post('user/login', data)
      .subscribe(
        response => {
          callback(response)
        },
        error => {
          callback(null)
        }
      )
  }
}
