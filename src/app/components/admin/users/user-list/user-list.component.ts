import { Component, OnInit } from '@angular/core';
import { User } from '../../../../models/user.model'
import { UserRequestService } from '../../../../services/user-request.service'
// import { FormGroup, FormBuilder, Validator } from '@angular/forms'
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Array<User>;
  message: String;

  constructor(
    private userRequestService: UserRequestService,
    private store: Store<User>,
    // private fb: FormBuilder
  ) { 
  this.userRequestService.getAllUser()
  .then((data: Array<User>)=>{
    this.store.dispatch({type:'INIT_USER',user:data})
    this.store.select('user').subscribe(arr => this.users = arr)
  })

  }

  ngOnInit() {
  }

}
