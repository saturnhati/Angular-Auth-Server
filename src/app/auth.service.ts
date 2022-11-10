import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthRegister } from "./classes/auth-register.class";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signUp(obj: AuthRegister) {
    return this.http.post("http://localhost:3000/register", obj);
  }

  signIn(obj: AuthRegister) {
    return this.http.post("http://localhost:3000/login", obj);
  }
}
