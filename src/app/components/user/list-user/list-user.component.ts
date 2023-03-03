import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {Utilisateur} from "../../../modules/Utilisateur";
import {Router} from "@angular/router";
import {Page} from "../../../modules/Page";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  utlisateurs!:Utilisateur[];
  keyword: string = '';
  userPage: Page = {
    totalPages: 0,
    totalElements: 0,
    last: false,
    first: false,
    size: 0,
    number: 0,
    numberOfElements: 0,
    content:[]
  };
  page: number = 0;
  size: number=2 ;
  pages: number[] = [];

  constructor(private userService:UserService,private router: Router) { }
  ngOnInit(): void {
    this.searchUsers();

  }

  searchUsers() {
    this.userService.searchUserpage(this.keyword, this.page, this.size)
      .subscribe(data => {
        this.utlisateurs = data;
        this.userPage.content = data;
        if (data.length > 0) {
          this.userPage.totalPages = Math.ceil(data[0].totalElements / this.size);
        }
        this.pages = Array(this.userPage.totalPages).fill(0).map((x, i) => i );

        if (this.page == 0) {
          this.userPage.first = true;
        } else {
          this.userPage.first = false;
        }
        if (this.page == this.userPage.totalPages -1) {
          this.userPage.last = true;
        } else {
          this.userPage.last = false;
        }
      });


  }

  goToPage(n: number) {
    this.page = n;
    this.searchUsers();
  }

  onNext() {
    this.page++;
    this.searchUsers();
  }

  onPrev() {
    this.page--;
    this.searchUsers();
  }

  onPageChange(event: any) {
    this.page = event.target.value;
    this.searchUsers();
  }
  ChangeSize() {
    this.searchUsers();
  }
}
