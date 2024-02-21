import { NgModule } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import LoginComponent from './login/login.component';
import { LoginFormComponent } from './login/login-form/login-form.component';

@NgModule({
  declarations: [
    // LoginFormComponent
  ],
  imports: [CommonModule, AuthenticationRoutingModule, ReactiveFormsModule, FormsModule, CommonModule, NgFor, NgIf]
})
export class AuthenticationModule {}
