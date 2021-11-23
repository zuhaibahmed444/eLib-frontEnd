import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  public addBook(book){
    return this.http.post(`${baseUrl}/book/`,book);
  }

  public getBooks(){
    return this.http.get(`${baseUrl}/book/`);
  }

  public getBookById(id){
    return this.http.get(`${baseUrl}/book/${id}`);
  }

  public downlaodbookbyid(id){
    return this.http.get(`${baseUrl}/book/download/${id}`);
  }

  public getBookCount(){
    return this.http.get(`${baseUrl}/book/count`);
  }
}
