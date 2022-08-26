import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoPageComponent } from './container/photo-page/photo-page.component';

const routes: Routes = [
  {

  path: '',
  component: PhotoPageComponent

}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotosRoutingModule { }
