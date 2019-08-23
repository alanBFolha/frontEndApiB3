import { UserService } from './../../services/user.service';
import { SharedService } from './../../services/shared.service';
import { User } from './../../model/user.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ResponseApi } from 'src/app/model/response-api';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {

  @ViewChild("form")
  form: NgForm

  user = new User('','','','');
  shared: SharedService;
  message: {};
  classCss: {}


  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) { 
    this.shared = SharedService.getInstance();
  }

  ngOnInit() {
    let id: string = this.route.snapshot.params['id'];

    if(id != undefined){
      this.findById(id);
    }
  }


  findById (id: string) {
    this.userService.findById(id).subscribe((responseApi:ResponseApi)=> {
      this.user = responseApi.data;
      this.user.password = '';

    }, err => {
      this.showMessage({
        type: 'error',
        text: err ['error'] ['errors'] [10]
      });
    });
  } 

  register () {
    debugger;
    this.message= {};
    this.userService.createrOrUpdate(this.user).subscribe ((responseApi:ResponseApi)=>{
      this.user = new User('','','','');
      let userRet : User = responseApi.data;
      this.form.resetForm();
      this.showMessage({
        type: 'sucess',
        text: `Registered ${userRet.email} sucessfullly`
      });
    }, err =>{
      this.showMessage({
        type: 'error',
        text: err ['error'] ['errors'] [10]
      });
    });
  }

  private showMessage (message: {type: string, text:string}) : void {
    this.message = message;
    this.buildClasses(message.type);
    setTimeout(() => {
      this.message = undefined
    }, 3000);
  }

  public buildClasses (type: string): void {
    this.classCss = {
      'alert': true
    }

    this.classCss['alert-'+type] = true;
  }


  getFromGroupClass (isInvalid: boolean, isDirty):{} {
    return {
      'form-group' : true,
      'has-error': isInvalid && isDirty,
      'has-sucess': !isInvalid && isDirty
    };
 }






}


