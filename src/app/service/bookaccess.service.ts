import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
@Injectable({
  providedIn: 'root'
})
export class BookaccessService {

  constructor(private http:HttpClient) { }

  public approveBook(reqId:any){
    return this.http.post(`${baseUrl}/bookassign/`,reqId);
  }

  public getActiveBookByUser(userId:any){
    return this.http.get(`${baseUrl}/bookassign/book-active/${userId}`);
  }

  public getAllBookByUser(userId:any){
    return this.http.get(`${baseUrl}/bookassign/book-all/${userId}`);
  }

  public getUserDetailsByBook(bookId:any){
    return this.http.get(`${baseUrl}/bookassign/book-res/${bookId}`);
  }

  public revokeBook(req:any){
    return this.http.post(`${baseUrl}/bookassign/revoke`,req);
  }
}
