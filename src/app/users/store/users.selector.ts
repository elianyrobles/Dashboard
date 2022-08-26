import { createSelector } from '@ngrx/store';
import { IUserState } from '../models';

export const getUser = (state: IUserState) => state;

export const getName = createSelector(getUser, (state: IUserState) => state.users.name);
export const grabUserById = createSelector(getUser, (state: IUserState) => state.users);
