import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosRoutingModule } from './photos-routing.module';
import { PhotoPageComponent } from './container/photo-page/photo-page.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PhotoReducer } from './store/photos.reducer';
import { PhotoEffects } from './store/photos.effects';
import { PhotosService } from './services/photos.service';




@NgModule({
  declarations: [
    PhotoPageComponent
  ],
  imports: [
    CommonModule,
    PhotosRoutingModule,
    CommonModule,
    PhotosRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('photos', PhotoReducer),
    EffectsModule.forFeature([PhotoEffects])
  ],
  providers: [PhotosService]
})
export class PhotosModule { }
