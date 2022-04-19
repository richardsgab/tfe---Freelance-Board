import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { ProjectAddComponent } from './project-add/project-add.component';
import { ProjectUpdateComponent } from './project-update/project-update.component';


@NgModule({
  declarations: [
    ProjectComponent,
    ProjectAddComponent,
    ProjectUpdateComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule
  ]
})
export class ProjectModule { }
