import { IResultId } from '@src/common/interfaces/IResultId';
import { IAlbumModule, ICreateAlbum } from '../models/album.model';
import { IPagination } from '../models/pagenation.model';

/**
 * @interface
 */
export interface IAlbumRepository {
  /**
   *
   * @param query {IPagination}
   */
  findAllAlbums(query: IPagination): Promise<IAlbumModule[]>;

  /**
   * @param id {number}
   */
  findOneAlbum(id: number): Promise<IAlbumModule>;

  /**
   * @param input {ICreateAlbum}
   */
  createAlbum(input: ICreateAlbum): Promise<IResultId>;

  /**
   * @param id {number}
   */
  updateAlbum(id: number, updateData: ICreateAlbum): Promise<IResultId>;

  /**
   * @param id {number}
   */
  deleteAlbum(id: number): Promise<IResultId>;
}
