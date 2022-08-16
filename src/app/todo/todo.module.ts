import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './container/todo/todo.component';
import { MaterialModule } from '../material/material.module';
import { TodoRoutingModule } from '../todo/todo-routing.module';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ToDoEffects } from './store/todo.effects';
import { toDoReducer } from './store/todo.reducer';

@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TodoRoutingModule,
    HttpClientModule,
    StoreModule.forFeature('todo', toDoReducer),
    EffectsModule.forFeature([ToDoEffects])
  ],
  providers: [UserService]
})
export class TodoModule { }
 