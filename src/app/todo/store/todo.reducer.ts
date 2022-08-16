import { createReducer, on } from '@ngrx/store';
import * as UserActions from './todo.actions';

export interface UserState {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export const initialState: UserState = {
    userId: null,
    id: null,
    title: null,
    completed: false
}

export const toDoReducer = createReducer(
    initialState,
    // getUserSuccess 
    on(UserActions.getUserSuccess, (state, { payload: payload }) => {
        return {
            ...state,
            userId: payload.userId,
            id: payload.id,
            title: payload.title,
            completed: payload.completed
        };
    }),
    on(UserActions.getUserByIdSuccess, (state, { payload: payload }) => {
        return {
            ...state,
            userId: payload.userId,
            id: payload.id,
            title: payload.title,
            completed: payload.completed
        };
    }))