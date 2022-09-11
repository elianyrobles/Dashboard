import { createSelector } from '@ngrx/store';
import { User } from '../models';

export const UserState = (state: User) => state;

export const getUser = createSelector(UserState, (state: User) => state);