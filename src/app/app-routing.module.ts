import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'layout', loadChildren: () => import('./layout/layout.module').then(p => p.LayoutModule)
  },
  {
    path: 'login', loadChildren: () => import('./login/login.module').then(p => p.LoginModule)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
