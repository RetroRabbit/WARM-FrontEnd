import { Component, OnInit, Input } from "@angular/core";
import { FormControl, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  username: string;
  password: string;
  //constructor(public username?: string, private password?: string) {}

  get pass() {
    return this.password;
  }
  set pass(value) {
    //put password constraint logic here
    this.password = value;
  }

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [
      Validators.required,
      Validators.nullValidator
    ])
  });

  getEmailErrorMessage() {
    if (this.loginForm.controls.email.hasError("required")) {
      return "You must enter a value";
    }

    return this.loginForm.controls.email.hasError("email")
      ? "Not a valid email"
      : "";
  }

  getPasswordErrorMessage() {
    if (this.loginForm.controls.password.hasError("required")) {
      return "You must enter a value";
    }

    return this.loginForm.controls.password.hasError("password")
      ? "Not a valid email"
      : "";
  }
  onSubmit() {
    // TODO: Make the call with the value
    console.warn(this.loginForm.value);
  }
}
