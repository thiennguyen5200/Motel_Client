import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../models/user.model'
import { ServerResponse } from '../models/types.model'
import { Store } from '@ngrx/store'

@Injectable()
export class UserRequestService {

  url = 'http://localhost:5000/'
  constructor(private http:HttpClient, private store: Store<User>) { }

  async getAllUser():Promise<User[]>{
    return this.http.get(`${this.url}user`)
    .toPromise()
    .then((result:ServerResponse)=>{
      if (result.code === 1) {
        console.log(result.data)
        return Promise.resolve(result.data)
      }
      throw new Error(`Can't show list user!`)
    })
    .catch(err => Promise.reject(err))
  }
}
