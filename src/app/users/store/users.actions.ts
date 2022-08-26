import { createAction, props } from "@ngrx/store";

export const getUserById = createAction('[User] Get User By Id', props<{ id: string}>());
export const getUserByIdSuccess = createAction('[User] Get User By Id Success', props<{ payload: any}>());
export const getUserByIdFailure = createAction('[User] Get User By Id Failure', props<{ error: any}>());