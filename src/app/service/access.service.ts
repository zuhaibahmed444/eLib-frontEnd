import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  constructor(private http:HttpClient) { }

  public reqAccess(req:any){
    return this.http.post(`${baseUrl}/accessreq/`,req);
  }

}
