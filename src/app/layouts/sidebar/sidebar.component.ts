import {Component, OnInit} from '@angular/core';

declare const $: any;

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
  { path: '/list-user', title: 'Gestion Utilisateur',  icon: 'person', class: 'add-user' },
  { path: '/list-profil', title: 'Gestion Profil',  icon: 'description', class: 'add-user' },

];
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit{
  menuItems!: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    return $(window).width() <= 991;

  };

}
