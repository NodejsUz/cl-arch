import { IFavoritesModule } from "../models/favorites.model";

export class FavoritesEntity implements IFavoritesModule {
  artists: string[];
  albums: string[];
  tracks: string[];

  constructor(artists: string[], albums: string[], tracks: string[]) {
      this.albums = albums;
      this.artists = artists;
      this.tracks = tracks;
  }
}