import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MentorFormComponent } from './mentor-form/mentor-form.component';
import { MentorListComponent } from './mentor-list/mentor-list.component';
import { CurrencyFormatPipe } from './pipes/currency-format.pipe';
import { InitialsPipe } from './pipes/initials.pipe';



@NgModule({
  declarations: [
    MentorListComponent,
    MentorFormComponent,
    CurrencyFormatPipe,
    InitialsPipe
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
