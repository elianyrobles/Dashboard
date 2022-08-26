import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UsersService } from '../services/users.service';
import { getUserById, getUserByIdSuccess, getUserByIdFailure } from './users.actions';

@Injectable()
export class UsersEffects {
    
    getUserById$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getUserById),
            switchMap((action) =>
                this.usersService.getUserById(action.id).pipe(
                    map(data => getUserByIdSuccess({ payload: data })),
                    catchError((error: any) => of(getUserByIdFailure(error)))
                )
            )
        ))

    constructor(
        private actions$: Actions,
        private usersService: UsersService
    ) { }
}