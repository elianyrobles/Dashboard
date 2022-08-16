export interface AlbumState {
  album: Album
}

export interface Album {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  }
