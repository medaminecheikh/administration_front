import {Component, OnInit} from '@angular/core';
import {Page} from "../../../modules/Page";
import {Utilisateur} from "../../../modules/Utilisateur";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit{
  profilPage: Page = {
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

  ngOnInit(): void {
  }

  onPrev() {

  }

  goToPage(p: number) {

  }


  onNext() {

  }
}
