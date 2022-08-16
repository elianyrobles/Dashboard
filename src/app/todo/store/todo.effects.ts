import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { getUser, getUserSuccess, getUserFailure, getUserById, getUserByIdSuccess, getUserByIdFailure } from './todo.actions';


@Injectable()
export class ToDoEffects {

    // get user effect
    getUser$ = createEffect(() => 
    this.actions$.pipe(
        ofType(getUser),
        switchMap(() =>
            this.userService.getUser().pipe(
                map(data => getUserSuccess({ payload: data })),
                catchError((error: any) => of(getUserFailure(error)))
            )
        )
    ))

    // get user by Id effect
    getUserById$ = createEffect(() => 
    this.actions$.pipe(
        ofType(getUserById),
        switchMap((action) =>
            this.userService.getUserById(action.id).pipe(
                map(data => getUserByIdSuccess({ payload: data })),
                catchError((error: any) => of(getUserByIdFailure(error)))
            )
        )
    ))
    
    constructor(
        private actions$: Actions,
        private userService: UserService
    ) { }
}
