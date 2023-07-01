import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private backendUrl = 'http://localhost:3000/api/v1/users'; // Reemplaza con la URL de tu backend

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    const loginData = {
      username: username,
      password: password
    };

    return this.http.post(`${this.backendUrl}/login`, loginData);
  }
}
