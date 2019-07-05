import { Action } from '@ngrx/store';
import { User } from '../models/user.model'

export function userReducer(state: Array<User> = null,action: any){
  if(action.type === 'INIT_USER')
    return action.users;
  if(action.type === 'ADD__USER')
    return [ ...state, action.user ];
  if(action.type === 'UPDATE_USER')
    return state.map(user => {
      if(user._id === action.user._id){ 
        //action.product : from server
        return user = action.user
      }
      return user
    });
  if(action.type === 'REMOVE__USER')
    return state.filter(element => element._id !== action._id )
  return state;
}