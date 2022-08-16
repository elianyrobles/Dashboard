import { createSelector } from '@ngrx/store';
import { AlbumState } from '../models';

export const getAlbum = (state: AlbumState) => state;

export const getThumbnailUrl = createSelector(getAlbum, (state: AlbumState) => state.album.thumbnailUrl);
export const grabAlbumById = createSelector(getAlbum, (state: AlbumState) => state.album);
