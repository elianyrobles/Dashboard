import { createAction, props } from "@ngrx/store";

// get post actions get dispatched from the component
export const getPostById = createAction('[Post] Get Post By Id', props<{ id: string}>());
export const getPostByIdSuccess = createAction('[Post] Get Post By Id Success', props<{ payload: any}>());
export const getPostByIdFailure = createAction('[POst] Get POst By Id Failure', props<{ error: any}>());