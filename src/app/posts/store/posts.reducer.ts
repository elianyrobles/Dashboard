import { createReducer, on } from '@ngrx/store';
import { Post } from '../models/posts';
import * as PostActions from './posts.actions';

export const initialState: Post = {
    
    userId: null,
    id: null,
    title: null,
    body: null,

}

export const postReducer = createReducer(
    initialState,
    // getAlbumSuccess 
    on(PostActions.getPostByIdSuccess, (state, { payload: payload }) => {
        return {
            ...state,
            userId: payload.userId,
            id: payload.id,
            title: payload.title,
            body: payload.body,
        };
    }))
