import { HttpClient} from '@angular/common/http';
import { LoginRequest } from './loginRequest';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './usuario'; 

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(credenciales:LoginRequest):Observable<User>{
   return  this.http.get<User>('././assets/data.json')
    /* this.http.get('http://localhost:3000/api/v1/usurios/catalogue') */

  }


}

