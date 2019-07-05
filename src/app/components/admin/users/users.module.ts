import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// import { UserListComponent } from '../users/user-list/user-list.component';
// import { UserCreateComponent } from '../users/user-create/user-create.component';
// import { UserDetailComponent } from '../users/user-detail/user-detail.component';
import { UsersComponent } from './users.component';

// const routes: Routes = [
//     {
//       path: 'product',
//       component: UsersComponent,
//       children: [
//         {
//           path: '',
//           redirectTo: 'list',
//           pathMatch: 'full'
//         },
//         {
//           path: 'list',
//           component: UserListComponent
//         },
//         {
//           path: 'create',
//           component: UserCreateComponent
//         },
//         {
//           path: 'detail',
//           component: UserDetailComponent
//         }
//       ]
//     }
//   ];

@NgModule({
  imports: [
    CommonModule,
    // RouterModule.forChild(routes),
  ],
  declarations: [
      UsersComponent,
      // UserListComponent,
      // UserCreateComponent,
      // UserDetailComponent
  ]
})
export class UserModule { }