import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout.component';



const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then(p => p.DashboardModule)
      },
      {
        path: 'customer-list',
        loadChildren: () => import('../customer-list/customer-list.module').then(p => p.CustomerListModule)
      },
      
    ]
  }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}
