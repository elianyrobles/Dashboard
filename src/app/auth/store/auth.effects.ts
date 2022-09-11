import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { AuthService } from "../services/auth.service";
import { signIn, signInSuccess, signInFailure } from "./auth.actions";

@Injectable()
export class AuthEffects {
    signIn$ = createEffect(() =>
        this.actions$.pipe(
            ofType(signIn),
            switchMap((action) =>
                this.authService.SignIn(action.email, action.password).pipe(
                    map(data => signInSuccess({ user: data })),
                    catchError((error: any) => of(signInFailure(error)))
                )
            )
        ))

    constructor(
        private actions$: Actions,
        private authService: AuthService
    ) { }
}