import { Component, OnInit } from "@angular/core";
import { Http2ServerRequest } from 'http2';
import {}

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(public username?: string, private password?: string) {}

  ngOnInit(): void {}
  get pass() {
    return this.password;
  }
  set pass(value) {
    //put password constraint logic here
    this.password = value;
  }

  onClick() {
    
  }
}

let tryLogin = (userName, password) => {};
