import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { UsersRoutingModule } from './users-routing.module';
import { UserPageComponent } from './container/user-page/user-page.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UsersService } from './services/users.service';
import { UserReducer } from './store/users.reducer';
import { UsersEffects } from './store/users.effects';

@NgModule({
  declarations: [
    UserPageComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forFeature('users',UserReducer),
    EffectsModule.forFeature([UsersEffects])
    
  ],
  providers: [UsersService]
})
export class UsersModule { }
