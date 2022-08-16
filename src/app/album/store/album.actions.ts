import { createAction, props } from "@ngrx/store";

// get album actions actions get dispatched from the component
export const getAlbumById = createAction('[Album] Get Album By Id', props<{ id: string}>());
export const getAlbumByIdSuccess = createAction('[Album] Get Album By Id Success', props<{ payload: any}>());
export const getAlbumByIdFailure = createAction('[Album] Get Album By Id Failure', props<{ error: any}>());