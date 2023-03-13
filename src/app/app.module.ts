import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatRippleModule} from "@angular/material/core";
import {MatButtonModule} from "@angular/material/button";
import {CommonModule} from "@angular/common";
import { FooterComponent } from './layouts/footer/footer.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListProfilComponent } from './components/profil/list-profil/list-profil.component';
import { AddProfilComponent } from './components/profil/add-profil/add-profil.component';
import { DetailProfilComponent } from './components/profil/detail-profil/detail-profil.component';
import { UpdateProfilComponent } from './components/profil/update-profil/update-profil.component';
import { UpdateUserComponent } from './components/user/update-user/update-user.component';
import { DetailUserComponent } from './components/user/detail-user/detail-user.component';
import { ListUserComponent } from './components/user/list-user/list-user.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import {MatIconModule} from "@angular/material/icon";
import {AuthInterceptorService} from "./services/auth/auth-interceptor.service";


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    DashboardComponent,
    ListProfilComponent,
    AddProfilComponent,
    DetailProfilComponent,
    UpdateProfilComponent,
    UpdateUserComponent,
    DetailUserComponent,
    ListUserComponent,
    AddUserComponent
  ],
    imports: [
        BrowserAnimationsModule,
        CommonModule,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
        BrowserModule,
        AppRoutingModule,
        MatIconModule
    ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
