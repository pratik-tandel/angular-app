import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    CommonModule
  ]
})
export class InternModule { }
