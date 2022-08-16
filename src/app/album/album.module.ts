import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './container/album/album.component';
import { AlbumRoutingModule } from './album-routing.module';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { AlbumService } from './services/album.service';
import { albumReducer } from './store/album.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AlbumEffects } from './store/album.effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AlbumComponent
  ],
  imports: [
    CommonModule,
    AlbumRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forFeature('album', albumReducer),
    EffectsModule.forFeature([AlbumEffects])
  ],
  providers: [AlbumService]
})
export class AlbumModule { }
