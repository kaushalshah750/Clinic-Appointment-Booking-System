import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url:string = "http://localhost:3000/"

  constructor(private http: HttpClient) { }

  getappointment(){
    return this.http.get(this.url + "appointments");
  }
}
