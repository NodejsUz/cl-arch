import { IResultId } from '@src/common/interfaces/IResultId';
import { ICreateTrack, ITrackModel } from '../models/track.model';

export interface ITrackRepository {
  findAllTracks(): Promise<ITrackModel[]>;
  findOneTract(id: number): Promise<ITrackModel>;
  createTrack(input: ICreateTrack): Promise<IResultId>;
  updateTrack(): Promise<IResultId>;
  deleteTrack(): Promise<IResultId>;
}
