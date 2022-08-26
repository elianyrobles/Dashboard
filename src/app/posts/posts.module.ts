import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostPageComponent } from './container/post-page/post-page.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from './store/posts.effects';
import { postReducer } from './store/posts.reducer';
import { PostsService } from './services/posts.service';


@NgModule({
  declarations: [
    PostPageComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forFeature('post', postReducer),
    EffectsModule.forFeature([PostsEffects])
  ],
  providers: [PostsService]
})
export class PostsModule { }
