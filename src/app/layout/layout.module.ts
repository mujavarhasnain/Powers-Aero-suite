import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { LayoutRoutingModule } from './layout-routing.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { MatButtonModule } from "@angular/material/button";
import { MatRippleModule } from "@angular/material/core";
import { MatMenuModule } from '@angular/material/menu';
 

@NgModule({
  imports: [
    CommonModule,
    SidebarModule,
    LayoutRoutingModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    MatMenuModule,
  
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent
  ]
})
export class LayoutModule {
}
