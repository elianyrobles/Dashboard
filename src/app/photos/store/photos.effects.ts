import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { PhotosService } from "../services/photos.service";
import { getPhotoById, getPhotoByIdFailure, getPhotoByIdSuccess } from "./photos.actions";



@Injectable()
export class PhotoEffects {

getPhotoById$ = createEffect(() => 
this.actions$.pipe(
    ofType(getPhotoById),
    switchMap((action) =>
        this.photoService.getPhotoById(action.id).pipe(
            map(data => getPhotoByIdSuccess({ payload: data })),
            catchError((error: any) => of(getPhotoByIdFailure(error)))
        )
    )
))

constructor(
    private actions$: Actions,
    private photoService: PhotosService
) { }
}