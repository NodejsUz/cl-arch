export interface ITrackModel {
  id: string; // uuid v4
  name: string;
  artistId: string | null; // refers to Artist
  albumId: string | null; // refers to Album
  duration: number; // integer number
}

export interface ICreateTrack
  extends Pick<ITrackModel, 'name' | 'duration' | 'albumId' | 'artistId'> {}
