import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogComponent } from './project/log/log.component';
import { IsLoggedGuard } from './guards/is-logged.guard';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'Project', loadChildren: () => import('./project/project.module').then(m => m.ProjectModule) },
  { path: './project/log', component: LogComponent },
  { path: 'User', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
