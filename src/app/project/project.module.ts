import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { ProjectAddComponent } from './project-add/project-add.component';
import { ProjectUpdateComponent } from './project-update/project-update.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ClientAddComponent } from './client-add/client-add.component';


@NgModule({
  declarations: [
    ProjectComponent,
    ProjectAddComponent,
    ProjectUpdateComponent,
    ClientAddComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class ProjectModule { }
