import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly ApiUrl = "http://localhost:5001";
readonly PhotoUrl = ""
 //data:any = {"Title":"Harry Potter and the Chamber of Secrets", "Location":"PUNE","Language":"ENGLISH"};
  constructor(private http:HttpClient) { }

  getMoviesList():Observable<any[]>{
     return this.http.get<any>(this.ApiUrl+ '/movies')
    //return this.data;
  }
}
