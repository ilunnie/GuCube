import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    backend = 'http://localhost:5047/'

    constructor(private http: HttpClient) {  }

    get(url: string) {
        return this.http
            .get(this.backend + url)
    }

    post(url: string, obj: any) {
        return this.http
            .post(this.backend + url, obj)
    }
}