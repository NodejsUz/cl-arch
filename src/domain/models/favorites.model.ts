import { IAlbumModule } from "./album.model";
import { IArtistModule } from "./artist.model";
import { ITrackModel } from "./track.model";

export interface IFavoritesModule {
  artists: string[]; // favorite artists ids
  albums: string[]; // favorite albums ids
  tracks: string[]; // favorite tracks ids
}

export interface IFavoritesResponse{
  artists: IArtistModule[];
  albums: IAlbumModule[];
  tracks: ITrackModel[];
}