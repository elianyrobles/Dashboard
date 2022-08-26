import { createSelector } from "@ngrx/store";
import { PhotoState } from "../models/photo";

export const getPhoto = (state: PhotoState) => state;

export const grabPhotoById = createSelector(getPhoto, (state: PhotoState) => state.photos);
export const getThumbnailUrl = createSelector(getPhoto, (state: PhotoState) => state.photos.thumbnailUrl);

 