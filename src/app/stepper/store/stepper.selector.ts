import { createSelector } from "@ngrx/store";
import { Order } from "../models";


export const getOrder = (state: Order) => state;

export const getSize = createSelector(getOrder, (state: Order) => state.size);