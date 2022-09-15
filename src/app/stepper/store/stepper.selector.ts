import { createSelector } from "@ngrx/store";
import { StepperState } from "../models";


export const getStepperState = (state: StepperState) => state;

export const getSize = createSelector(getStepperState, (state: StepperState) => state.stepper.size);