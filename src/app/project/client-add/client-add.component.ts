import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent implements OnInit {

  addClientForm! : FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.addClientForm = this._fb.group({
      cname : [null, [Validators.required]],
      cemail : [null],
      cphone : [null],
      cadress : [null]
    })
  }

}
