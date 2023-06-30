import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl = 'http://localhost:3000/api/v1/users'; // Ruta base del backend

  constructor(private http: HttpClient) { }

  registerUser(user: any) {
    return this.http.post(`${this.baseUrl}/register`, user);
  }
}
