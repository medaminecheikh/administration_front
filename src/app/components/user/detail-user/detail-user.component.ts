import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit{

  constructor(private userService:UserService,private router: Router) { }

  updateUser() {
    this.router.navigate(["update-user/:id"]);
  }

  ngOnInit(): void {

  }
}
