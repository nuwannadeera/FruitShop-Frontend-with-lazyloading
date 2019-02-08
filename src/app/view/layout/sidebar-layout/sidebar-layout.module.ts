import {NgModule} from '@angular/core';
import {SidebarLayoutComponent} from './view/sidebar-layout.component';
import {CommonModule} from '@angular/common';
import {SidebarLayoutRouterModule} from './sidebar-layout-router.module';


@NgModule({
  declarations: [SidebarLayoutComponent],
  imports: [
    CommonModule,
    SidebarLayoutRouterModule
  ]
})

export class SidebarLayoutModule { }


