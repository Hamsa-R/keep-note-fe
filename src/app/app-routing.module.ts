import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NotePropertiesComponent } from './note-properties/note-properties.component';
import { NoteViewComponent } from './note-view/note-view.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthGuard } from './services/auth.guard';
import { CanDeactivateGuard } from './services/can-deactivate.guard';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegistrationComponent
  },
  {
    path: "home",
    component: NoteViewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "note-properties/:id",
    component: NotePropertiesComponent,
    canActivate: [AuthGuard],
    canDeactivate: [CanDeactivateGuard]
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
