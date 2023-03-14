import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, map, Observable, pipe, tap} from "rxjs";
import {TokenStorageService} from "./token-storage.service";
import {CurrentUser} from "../../modules/TokenResponse";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  host = "http://localhost:8088/POS/auth/";
  private currentUserSubject: BehaviorSubject<CurrentUser | null>;
  public currentUser: Observable<CurrentUser | null>;

  constructor(private http: HttpClient,private router: Router) {
    this.currentUserSubject = new BehaviorSubject<CurrentUser | null>(this.getCurrentUser());
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): CurrentUser | null {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    console.log("Logging in with username: " + username + " and password: " + password);
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.post<any>(this.host+'authenticate?password='+password+'&username='+username, null, { headers })
      .pipe(map(response => {
        const user = {
          username: response.username || '',
          roles: response.roles || [],
          accessToken: response.accessToken || '',
          refreshToken: response.refreshToken || ''
        };
        localStorage.setItem('accessToken', response.accessToken);
        localStorage.setItem('refreshToken', response.refreshToken);
        this.setCurrentUser(user);
        return user;
      }));
  }

  logout() {
    this.setCurrentUser(null);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    this.router.navigate(['/login']);
  }

  refreshToken(){
    const refreshToken = localStorage.getItem('refreshToken');
    if (refreshToken) {
      return this.http.get<any>(this.host+'refreshtoken', { headers: { 'Authorization': 'Bearer ' + refreshToken } })
        .pipe(map(response => {
          const user = {
            username: response.username,
            roles: response.roles,
            accessToken: response.accessToken,
            refreshToken: response.refreshToken
          };
          localStorage.setItem('accessToken', response.accessToken);
          localStorage.setItem('refreshToken', response.refreshToken);
          this.setCurrentUser(user);
          return user;
        }));
    }
    return null;
  }

  setCurrentUser(user: CurrentUser | null): void {
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
    } else {
      localStorage.removeItem('currentUser');
    }
    this.currentUserSubject.next(user);
  }

  private getCurrentUser(): CurrentUser | null {
    const storedUser = localStorage.getItem('currentUser');
    return storedUser ? JSON.parse(storedUser) : null;
  }
}
