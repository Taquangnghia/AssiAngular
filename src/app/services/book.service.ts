import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book, CartType } from '../types/Book';
import { Category } from '../types/category';

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
  updateBook(id: number|string, data:Book ): Observable<any> {
    return this.http.put(`${environment.book}/${id}`, data);
  }
  getOneBook(id:string|null): Observable<Book>{
    return this.http.get<Book>(`${environment.book}/${id}`)
  }
  // Danh muc 
  getBookCategory(id:string):Observable<Book[]>{
    return this.http.get<Book[]>(`${environment.category}/${id}`)
  }
  getCategory():Observable<Category[]>{
    return this.http.get<Category[]>(environment.category)
  }
  updateStatus(id:string,data:any):Observable<any>{
    return this.http.patch(`${environment.book}/${id}`,data)
  }
  deleteCategory(_id:string):Observable<Category>{
    return this.http.delete<Category>(`${environment.category}/${_id}`)
  }
  CreateCategory(data:Category):Observable<Category>{
    return this.http.post<Category>(`${environment.category}`,data)
  }
  updatetCategory(id:any|null,data:Category):Observable<Category>{
    return this.http.put<Category>(`${environment.category}/${id}`,data)
  }
}
