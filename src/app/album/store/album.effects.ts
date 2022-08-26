import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AlbumService } from '../services/album.service';
import { getAlbumById, getAlbumByIdSuccess, getAlbumByIdFailure} from './album.actions';


@Injectable()
export class AlbumEffects {

    // get album effect  triggered when action gets dispatched from component
    getAlbumById$ = createEffect(() => 
    this.actions$.pipe(
        ofType(getAlbumById),
        switchMap((action) =>
            this.albumService.getAlbumById(action.id).pipe(
                map(data => getAlbumByIdSuccess({ payload: data })),
                catchError((error: any) => of(getAlbumByIdFailure(error)))
            )
        )
    ))


    constructor(
        private actions$: Actions,
        private albumService: AlbumService
    ) { }
}
