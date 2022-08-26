import { createAction, props } from "@ngrx/store";

export const getPhotoById = createAction('[Photo] Get Photo By Id', props<{ id: string}>());
export const getPhotoByIdSuccess = createAction('[Photo] Get Photo By Id Success', props<{ payload: any}>());
export const getPhotoByIdFailure = createAction('[Photo] Get Photo By Id Failure', props<{ error: any}>());
