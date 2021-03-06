import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'https://localhost:44334/api/auth/';
  constructor(private http: HttpClient) {}
debugger;
  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.tokenString);
        }
      })
    );
  }

  register(model: any) {
    return this.http.post(this.baseUrl + 'register', model).pipe(
      map((responswe: any) => {
        const user = responswe;
      })
    );

  }
}
