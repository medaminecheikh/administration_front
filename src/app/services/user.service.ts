import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Utilisateur} from "../modules/Utilisateur";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  host = "http://localhost:8088/POS/";
  constructor(private http: HttpClient) { }
  public searchUserpage(Keyword:String,page:number,size:number):Observable<Utilisateur[]>{
    return this.http.get<Utilisateur[]>(this.host+"searchPageUsers?Keyword="+Keyword+"&page="+page+"&size="+size);
  }


}
