import { IResultId } from '@src/common/interfaces/IResultId';
import { IArtistModule, ICreateArtist } from '../models/artist.model';

export interface IArtistRepository {
  findAllArtists(): Promise<IArtistModule[]>;
  findOneArtist(id: number): Promise<IArtistModule>;
  createArtist(input: ICreateArtist): Promise<IResultId>;
  updateArtist(): Promise<IResultId>;
  deleteArtist(): Promise<IResultId>;
}
