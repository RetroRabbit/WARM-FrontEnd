import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { startWith, map, tap, merge } from "rxjs/operators";
import { User } from "../models/user";
import { environment } from "../../environments/environment";

interface LoginDetails {
  username: string;
  password: string;
}

@Injectable({
  providedIn: "root"
})
export class AuthService {
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUser = new (JSON.parse(
      localStorage.getItem("currentUser")
    ).asObservable)();
  }

  login(username: string, password: string) {
    return this.http
      .post<any>(environment.apiUrl, { username, password })
      .pipe(
        map(user => {
          // login successful if there's a jwt token in the response
          if (user && user.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem("currentUser", JSON.stringify(user));
          }

          return user;
        })
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
  }
}
