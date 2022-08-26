import { createSelector } from '@ngrx/store';
import { PostState } from '../models/posts';


export const getPost = (state: PostState) => state;
export const grabPostById = createSelector(getPost, (state: PostState) => state.post);
