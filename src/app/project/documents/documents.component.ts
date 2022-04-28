import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  displayReg:boolean = false;
  displayCadtr:boolean = false;
  displayColl:boolean = false;
  displayContx:boolean = false;
  displayNotes:boolean = false;
  displayDAut:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }



}
