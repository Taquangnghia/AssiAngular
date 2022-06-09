import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../types/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }
  getBook ():Observable<Book[]>{
    return this.http.get<Book[]>(environment.book)
  }
  DeleteBook(id:string):Observable<Book>{
    return this.http.delete<Book>(`${environment.book}/${id}`)
  }
  CreateBook(data:Book):Observable<Book>{
    return this.http.post<Book>(`${environment.book}`,data)
  }
  updateBook(id: number|string, data:Book ): Observable<Book> {
    return this.http.put<Book>(`${environment.book}/${id}`, data);
  }
  getOneBook(id:any|null): Observable<Book>{
    return this.http.get<Book>(`${environment.book}/${id}`)
  }
  
}
