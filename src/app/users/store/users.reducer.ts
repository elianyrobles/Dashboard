import { createReducer, on } from '@ngrx/store';
import { IUser } from '../models';
import * as UserActions from './users.actions';

export const initialState: IUser = {
    id: null,
    name: null,
    username: null,
    email: null,
    address: null,
    phone: null,
    website: null,
    company: null,
    
}

export const UserReducer = createReducer(
    initialState, 
    on(UserActions.getUserByIdSuccess, (state, { payload: payload }) => {
        return {
            ...state,
            id: payload.id,
            name: payload.name,
            username: payload.username,
            email: payload.email,
            address: payload.address,
            phone: payload.phone,
            website: payload.website,
            company: payload.company
        };
    }))
