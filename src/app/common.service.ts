import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  getUserData(){
    let apiurl = "https://jsonplaceholder.typicode.com/users";
    return this.http.get(apiurl)
  }
}
