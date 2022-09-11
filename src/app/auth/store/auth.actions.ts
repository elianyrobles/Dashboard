import { createAction, props } from "@ngrx/store";
import { User } from "../models";

export const signIn = createAction('[User] SignIn', props<{ email: string, password: string}>());
export const signInSuccess = createAction('[User] SignIn Success', props<{ user: User}>());
export const signInFailure = createAction('[User] SignIn Failure', props<{ error: any}>());
