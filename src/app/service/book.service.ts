import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  public getBooks(){
    return this.http.get(`${baseUrl}/book/`);
  }

  public downlaodbookbyid(id){
    return this.http.get(`${baseUrl}/book/download/${id}`);
  }
}
