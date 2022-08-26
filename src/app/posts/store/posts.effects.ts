import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap } from 'rxjs/operators';
import { PostsService } from "../services/posts.service";
import { getPostById, getPostByIdFailure, getPostByIdSuccess } from "./posts.actions";

@Injectable()
export class PostsEffects {

 // get posts effects  triggered when action gets dispatched from component
    getPostById$ = createEffect(() => 
    this.actions$.pipe(
        ofType(getPostById),
        switchMap((action) =>
            this.postsService.getPostById(action.id).pipe(
                map(data => getPostByIdSuccess({ payload: data })),
                catchError((error: any) => of(getPostByIdFailure(error)))
            )
        )
    ))


    constructor(
        private actions$: Actions,
        private postsService: PostsService
    ) { }


    
}
