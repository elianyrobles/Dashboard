import { createAction, props } from "@ngrx/store";
import { User } from "../models";

// get user actions
export const getUser = createAction('[User] Get User');
export const getUserSuccess = createAction('[User] Get User Success', props<{ payload: User}>());
export const getUserFailure = createAction('[User] Get User Failure', props<{ error: any}>());

// get user by ID actions
export const getUserById = createAction('[User] Get User By Id', props<{ id: number}>());
export const getUserByIdSuccess = createAction('[User] Get User By Id Success', props<{ payload: User}>());
export const getUserByIdFailure = createAction('[User] Get User By Id Failure', props<{ error: any}>());

//