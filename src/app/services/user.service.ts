import { HELP_DESK_API } from './helpdesk.api';
import { User } from './../model/user.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  login(user: User) {
    return this.http.post(`${HELP_DESK_API}/api/auth`, user);
  }

  createrOrUpdate(user:User) {
    if(user.id != null && user.id != ''){
      return this.http.put(`/api/user`,user);
    }else {
      user.id = null;
      return this.http.post(`/api/user`,user);
    }
  }

  findAll (page:number, count:number) {
    return this.http.get(`/api/user/${page}/${count}`);
  }

  findById (id:string) {
    return this.http.get(`/api/user/${id}`);
  }

  delete (id:string) {
    return this.http.delete(`/api/user/${id}`);
  }
}
