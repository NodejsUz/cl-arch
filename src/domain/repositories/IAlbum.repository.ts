import { IResultId } from "@src/common/IResultId";
import { IAlbumModule, ICreateAlbum } from "../models/album.model";

export interface IAlbumRepository {
  findAllAlbums(): Promise<IAlbumModule[]>;
  findOneAlbum(id: number): Promise<IAlbumModule>;
  createAlbum(input: ICreateAlbum): Promise<IResultId>;
  updateAlbum(): Promise<IResultId>;
  deleteAlbum(): Promise<IResultId>;
}
