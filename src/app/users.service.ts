import { Injectable } from "@angular/core";
import { User } from "./models/user";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  private users: User[] = [];

  constructor() {}

  getUsers() {
    return this.users;
  }

  getUser(id: number) {
    return this.users.find((user) => user.id == id);
  }
}
