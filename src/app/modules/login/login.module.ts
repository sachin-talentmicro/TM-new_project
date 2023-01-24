import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';



@NgModule({
  declarations: [
    ChangePasswordComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
