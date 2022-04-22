import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { ProjectAddComponent } from './project-add/project-add.component';
import { ProjectUpdateComponent } from './project-update/project-update.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ClientAddComponent } from './client-add/client-add.component';
import { LogComponent } from './log/log.component';
import { InfoComponent } from './info/info.component';
import { DocumentsComponent } from './documents/documents.component';
import { VisualsComponent } from './visuals/visuals.component';


@NgModule({
  declarations: [
    ProjectComponent,
    ProjectAddComponent,
    ProjectUpdateComponent,
    ClientAddComponent,
    LogComponent,
    InfoComponent,
    DocumentsComponent,
    VisualsComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class ProjectModule { }
