import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './container/todo/todo.component';
import { MaterialModule } from '../material/material.module';
import { TodoRoutingModule } from './todo-routing.module';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
    MaterialModule,
    TodoRoutingModule,
    HttpClientModule
  ],
  providers: [UserService]
})
export class TodoModule { }
 