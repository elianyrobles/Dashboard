import { createReducer, on } from '@ngrx/store';
import { Album } from '../models/';
import * as AlbumActions from './album.actions';

export const initialState: Album = {
    albumId: null,
    id: null,
    title: null,
    url: null,
    thumbnailUrl: null,
}

export const albumReducer = createReducer(
    initialState,
    // getAlbumSuccess 
    on(AlbumActions.getAlbumByIdSuccess, (state, { payload: payload }) => {
        return {
            ...state,
            albumId: payload.albumId,
            id: payload.id,
            title: payload.title,
            url: payload.url,
            thumbnailUrl: payload.thumbnailUrl
        };
    }))
