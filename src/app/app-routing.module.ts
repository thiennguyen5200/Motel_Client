import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './components/admin/users/user-list/user-list.component'
import { UserDetailComponent } from './components/admin/users/user-detail/user-detail.component'
import { UserCreateComponent } from './components/admin/users/user-create/user-create.component'

const routes: Routes = [
  {path:'list-user', component:UserListComponent},
  {path:'detail-user', component:UserDetailComponent},
  {path:'create-user', component:UserCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
