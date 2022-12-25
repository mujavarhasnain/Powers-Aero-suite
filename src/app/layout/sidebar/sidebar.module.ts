import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { MatRippleModule } from "@angular/material/core";
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
    MatRippleModule,
    MatButtonModule
  ],
  exports: [
    SideBarComponent
  ],
  declarations: [
    SideBarComponent
  ]
})
export class SidebarModule {
}
