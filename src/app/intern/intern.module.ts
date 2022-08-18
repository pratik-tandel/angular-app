import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { InternFormComponent } from './intern-form/intern-form.component';
import { InternListComponent } from './intern-list/intern-list.component';
import { InternComponent } from './intern.component';



@NgModule({
  declarations: [
    InternFormComponent,
    InternListComponent,
    InternComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class InternModule { }
