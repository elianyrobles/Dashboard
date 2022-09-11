import { createReducer, on } from "@ngrx/store";
import { User } from "../models/user";
import * as AuthActions from './auth.actions'

export const initialState: User = {
    uid: null,
    email: null,
    displayName: null,
    emailVerified: null,
}

export const AuthReducer = createReducer(
    initialState,
    on(AuthActions.signInSuccess, (state, { user: payload }) => {
        return {
            ...state,
            uid: payload.uid,
            email: payload.email,
            displayName: payload.displayName,
            emailVerified: payload.emailVerified
        };
    }))