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

  public getAllAcessReq(){
    return this.http.get(`${baseUrl}/accessreq/`);
  }

  public getAccessReqByUser(email:any){
    return this.http.post(`${baseUrl}/accessreq/user`,email);
  }

  public getAccessReqByAdmin(){
    return this.http.get(`${baseUrl}/accessreq/active`);
  }

  public getAccessReqCount(){
    return this.http.get(`${baseUrl}/accessreq/count`);
  }
  

}
