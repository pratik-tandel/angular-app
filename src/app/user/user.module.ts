import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserListTwoComponent } from './user-list-two/user-list-two.component';



@NgModule({
  declarations: [
    UserListTwoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserListTwoComponent
  ]
})
export class UserModule { }
