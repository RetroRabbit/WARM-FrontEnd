import { Component, OnInit } from "@angular/core";
import { Http2ServerRequest } from 'http2';


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent  {
  constructor(public username?: string, private password?: string) {}

  get pass() {
    return this.password;
  }
  set pass(value) {
    //put password constraint logic here
    this.password = value;
  }

  onSubmit() {
    if (!this.userLoginForm.valid) {
      return;
  }
  
  }
}

let tryLogin = (userName, password) => {};
