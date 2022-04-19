import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectAddComponent } from './project-add/project-add.component';
import { ProjectUpdateComponent } from './project-update/project-update.component';
import { ProjectComponent } from './project.component';

const routes: Routes = [{ path: '', component: ProjectComponent, children: [
  { path: 'add', component: ProjectAddComponent },
  { path: 'update', component: ProjectUpdateComponent },
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
