import { Component, OnInit } from '@angular/core';
import { Link } from '../models/links';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  // links! = Link[
  //   { title : Home , url : "/"},
  //   { title : AddProject , url: "/project-form"},
  // ];

  constructor() { }

  ngOnInit(): void {
  }

}
