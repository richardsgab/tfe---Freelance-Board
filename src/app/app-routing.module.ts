import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogComponent } from './project/log/log.component';


const routes: Routes = [
  { path: 'Project', loadChildren: () => import('./project/project.module').then(m => m.ProjectModule) },
  { path: './project/log', component: LogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
