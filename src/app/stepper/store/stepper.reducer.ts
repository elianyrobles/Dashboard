import { createReducer, on } from '@ngrx/store';
import { Order } from '../models';
import * as StepperActions from './stepper.actions';

export const initialState: Order = {
    size: null,
}

export const stepperReducer = createReducer(
    initialState, on(StepperActions.saveSize, (state, { size: payload }) => {
        return {
            ...state,
            size: payload
        };
    }))