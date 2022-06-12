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
  getAuth():Observable<User[]>{
    return this.http.get<User[]>(environment.user)
  }
  updateAut(_id:string,data:any):Observable<any>{
    return this.http.put(`${environment.user}/${_id}`,data)
  }
  deleteAuth(_id:string):Observable<User>{
    return this.http.delete<User>(`${environment.user}/${_id}`)
  }
}
