import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentsComponent } from './documents/documents.component';
import { InfoComponent } from './info/info.component';
import { LogComponent } from './log/log.component';
import { ProjectAddComponent } from './project-add/project-add.component';
import { ProjectUpdateComponent } from './project-update/project-update.component';
import { ProjectComponent } from './project.component';
import { ShowProjectsComponent } from './show-projects/show-projects.component';
import { VisualsComponent } from './visuals/visuals.component';

const routes: Routes = [{ path: '', component: ProjectComponent, children: [
  { path: 'add', component: ProjectAddComponent },
  { path: 'update/:id', component: ProjectUpdateComponent , children : [
    { path : 'log', component: LogComponent},
    { path : 'info', component: InfoComponent},
    { path : 'docs', component: DocumentsComponent},
    { path : 'visuals', component: VisualsComponent}
  ]},
  { path: 'show', component: ShowProjectsComponent }
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
