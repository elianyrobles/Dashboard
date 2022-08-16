import { createSelector } from '@ngrx/store';
import { User } from '../models';
import { UserState } from './todo.reducer';

export const getUser = (state: User) => state;

// get user
export const getEntireUser = createSelector(getUser, (state: UserState) => state);
export const getUserTitle = createSelector(getUser, (state: UserState) => state.title);

// get user by ID
export const getUserById = createSelector(getUser, (state: UserState) => state);

