import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDialogModule } from "@angular/material/dialog";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { DashboardComponent } from './dashboard.component';
import { NgChartsModule } from 'ng2-charts';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: DashboardComponent }
    ]),
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    NgChartsModule,
    MatCardModule 
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule {
}
