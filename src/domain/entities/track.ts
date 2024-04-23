import { randomUUID } from 'crypto';
import { ITrackModel } from '../models/track.model';

export class TrackEntity implements ITrackModel {
  id: string;
  name: string;
  artistId: string | null;
  albumId: string | null;
  duration: number;

  constructor(
    name: string,
    duration: number,
    artistId?: string,
    albumId?: string,
  ) {
    this.id = randomUUID();
    this.name = name;
    this.albumId = albumId ?? null;
    this.artistId = artistId ?? null;
    this.duration = duration;
  }
}
