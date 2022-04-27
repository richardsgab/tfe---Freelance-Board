import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  project! : Project;
  pname! : string;

  constructor(private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
  }

}
