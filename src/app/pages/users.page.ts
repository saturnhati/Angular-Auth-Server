import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { AuthRegister } from "../classes/auth-register.class";
import { User } from "../models/user";
import { UsersService } from "../users.service";

@Component({
  template: `
    <div class="container mt-4">
      <ul class="list-group">
        <!-- user.id -->
        <li [routerLink]="[user]" routerLinkActive="active" class="list-group-item" *ngFor="let user of users">
          <!-- user.name -->
          {{ user }}
        </li>
      </ul>
      <hr />
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [],
})
export class UsersPage implements OnInit {
  users!: AuthRegister[];
  constructor(private usersSrv: UsersService, private http: HttpClient) {}

  ngOnInit(): void {
    // this.http.get("http://localhost:3000/users").subscribe((data) => {
    //   console.log(data);
    // });
  }
}
