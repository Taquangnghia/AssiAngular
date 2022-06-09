import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User, UserToken } from '../types/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  signup(data:User):Observable<User>{
    return this.http.post<User>(`${environment.signup}`,data)
  }
  signin(data:User):Observable<UserToken>{
    return this.http.post<UserToken>(`${environment.signin}`,data)
  }
}
