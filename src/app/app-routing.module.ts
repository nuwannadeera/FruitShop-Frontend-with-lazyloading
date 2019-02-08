import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './service/auth-service/auth.guard';

const routes: Routes = [

  {
    path : 'sidebar',
    loadChildren : 'src/app/view/layout/sidebar-layout/sidebar-layout.module#SidebarLayoutModule',
    canActivate: [AuthGuard]
  },
  {
    path : 'login',
    loadChildren : 'src/app/view/layout/login-layout/login-layout.module#LoginLayoutModule'
  },
  { path: '',
    redirectTo: '/sidebar',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
