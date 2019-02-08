import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SidebarLayoutComponent} from './view/sidebar-layout.component';


const routes: Routes = [

  {
    path: '',
    component: SidebarLayoutComponent,
    children: [
      {
        path : '',
        loadChildren : 'src/app/view/pages/dashboard/dashboard.module#DashboardModule'
      },
      {
        path : 'dashboard',
        loadChildren : 'src/app/view/pages/dashboard/dashboard.module#DashboardModule'
      },
      {
        path : 'customer',
        loadChildren : 'src/app/view/pages/customer/customer.module#CustomerModule'
      },
      {
        path : 'fruititem',
        loadChildren : 'src/app/view/pages/fruititem/fruititem.module#FruititemModule'
      },
      {
        path : 'supplier',
        loadChildren : 'src/app/view/pages/supplier/supplier.module#SupplierModule'
      },
      {
        path : 'order',
        loadChildren : 'src/app/view/pages/order/order.module#OrderModule'
      }
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class  SidebarLayoutRouterModule { }
