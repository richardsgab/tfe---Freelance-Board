import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { UserAddComponent } from './user-add/user-add.component';
import { UserComponent } from "./user.component";

const routes: Routes = [{ path: '', component: UserComponent, children: [
  {path: 'useradd', component: UserAddComponent}
]}];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class UserRoutingModule { }