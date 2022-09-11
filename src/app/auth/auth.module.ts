import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './containers/sign-in/sign-in.component';
import { SignUpComponent } from './containers/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './containers/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './containers/verify-email/verify-email.component';
import { AuthService } from './services/auth.service';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthReducer } from './store/auth.reducer';
import { AuthEffects } from './store/auth.effects';


@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', AuthReducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  providers: [AuthService]
})
export class AuthModule { }
