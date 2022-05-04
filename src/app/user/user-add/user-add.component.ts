import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {


  addUserForm!: FormGroup;
  Uss: User[] = [];

  constructor(private _fb: FormBuilder, private userservice: UserService, private _route : Router) {
    
   }

  ngOnInit(): void {
    this.addUserForm = this._fb.group({
      unom: [null,[Validators.minLength(2), Validators.maxLength(30), Validators.required]],
      uprenom: [null, [Validators.required]],
      uemail: [null, [Validators.required, Validators.email]],
      upassword : [null, [Validators.required]]
    })
  }

  

  addnewUser(){
    if(this.addUserForm.valid){
      let newuser = { ...this.addUserForm.value, id: 0};
      this.userservice.add(newuser).subscribe({
      next: () => { /* TODO whatever */},
      })
    }
  }

}
