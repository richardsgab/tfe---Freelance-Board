import { Component, EventEmitter, OnInit, Output  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Clients } from 'src/app/models/clients';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent implements OnInit {

  @Output()
  onSubmit: EventEmitter<boolean>

  addClientForm! : FormGroup;
  clnts : Clients[] = [];
  
  constructor(private _fb: FormBuilder, private _clientService : ClientService, private _route : Router) 
  { 
    this.onSubmit = new EventEmitter<boolean>();
  }

  ngOnInit(): void {
    this.addClientForm = this._fb.group({
      cname : [null, [Validators.required]],
      cemail : [null],
      cphone : [null],
      cadress : [null]
    })
  }  

  addClient()
  {
    if(this.addClientForm.valid){
      let clientA = { ...this.addClientForm.value, id : 0};      
      this._clientService.add(clientA).subscribe({
        next: () => this.onSubmit.emit(true),
      });
    }
  }

}

