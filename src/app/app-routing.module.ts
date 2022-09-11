import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/shared/guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/todo', pathMatch: 'full' },
  {
    path: 'todo',
    canActivate: [AuthGuard],
    loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule)
  },

  {
    path: 'album',
    canActivate: [AuthGuard],
    loadChildren: () => import('./album/album.module').then(m => m.AlbumModule)
  },
  
  {
    path: 'posts',
    canActivate: [AuthGuard],
    loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)
  },

  {
    path: 'photos',
    canActivate: [AuthGuard],
    loadChildren: () => import('./photos/photos.module').then(m => m.PhotosModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'stepper',
    loadChildren: () => import('./stepper/stepper.module').then(m => m.StepperModule)
  },
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


