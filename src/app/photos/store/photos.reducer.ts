import { createReducer, on } from "@ngrx/store";
import { Photo } from "../models/photo";
import * as PhotoActions from './photos.actions';


export const initialState: Photo = {
    albumId: null,
    id: null,
    title: null,
    url: null,
    thumbnailUrl: null,
}

export const PhotoReducer = createReducer(
    initialState,
    on(PhotoActions.getPhotoByIdSuccess, (state, { payload: payload }) => {
        return {
            ...state,
            albumId: payload.albumId,
            id: payload.id,
            title: payload.title,
            url: payload.url,
            thumbnailUrl: payload.thumbnailUrl
        };
    }))