import { IResultId } from "@src/common/IResultId";
import { IFavoritesResponse } from "../models/favorites.model";

export interface IFavoritesRepository {
  getAllFavs(): Promise<IFavoritesResponse>;
  addTrackToFavorites(id: number): Promise<IResultId>;
  deleteTrackFromFavorites(id: number): Promise<IResultId>;
  addArtistToFavorites(id: number): Promise<IResultId>;
  deleteArtistFromFavorites(id: number): Promise<IResultId>;
  addAlbumToFavorites(id: number): Promise<IResultId>;
  deleteAlbumFromFavorites(id: number): Promise<IResultId>;
}
