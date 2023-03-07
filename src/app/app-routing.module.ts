import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from "./components/login/login.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {ListUserComponent} from "./components/user/list-user/list-user.component";
import {ListProfilComponent} from "./components/profil/list-profil/list-profil.component";
import {AddUserComponent} from "./components/user/add-user/add-user.component";
import {UpdateUserComponent} from "./components/user/update-user/update-user.component";
import {AddProfilComponent} from "./components/profil/add-profil/add-profil.component";
import {UpdateProfilComponent} from "./components/profil/update-profil/update-profil.component";
import {DetailProfilComponent} from "./components/profil/detail-profil/detail-profil.component";
import {DetailUserComponent} from "./components/user/detail-user/detail-user.component";

const routes: Routes = [
  { path: 'list-user',   component: ListUserComponent },
  { path: 'add-user',   component: AddUserComponent },
  { path: 'detail-user/:id',   component: DetailUserComponent },
  { path: 'update-user/:id',   component: UpdateUserComponent },
  { path: 'list-profil',   component: ListProfilComponent },
  { path: 'add-profil',   component: AddProfilComponent },
  { path: 'update-profil/:id',   component: UpdateProfilComponent },
  { path: 'detail-profil/:id',   component: DetailProfilComponent },
  { path: 'login',   component: LoginComponent },
  { path: 'dashboard',   component: DashboardComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
