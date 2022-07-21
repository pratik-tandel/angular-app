import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MentorFormComponent } from './mentor-form/mentor-form.component';
import { MentorListComponent } from './mentor-list/mentor-list.component';



@NgModule({
  declarations: [
    MentorListComponent,
    MentorFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MentorListComponent,
    MentorFormComponent
  ]
})
export class MentorModule { }
