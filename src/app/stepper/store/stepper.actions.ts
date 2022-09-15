import { createAction, props } from "@ngrx/store";


export const saveSize = createAction('[Stepper] Save Size', props<{ size: string}>());