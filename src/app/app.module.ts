import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './components/admin/users/users.module';
import { UserListComponent } from './components/admin/users/user-list/user-list.component';
import { UserCreateComponent } from './components/admin/users/user-create/user-create.component';
import { UserDetailComponent } from './components/admin/users/user-detail/user-detail.component';
import { UserRequestService } from './services/user-request.service';
import { userReducer } from './reducers/index';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserCreateComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    RouterModule.forRoot(
      routes
    ),
    StoreModule.forRoot({
      user: userReducer
    }),
    HttpClientModule
  ],
  providers: [
    UserRequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
