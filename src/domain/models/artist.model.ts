export interface IArtistModule {
  id: string; // uuid v4
  name: string;
  grammy: boolean;
}

export interface ICreateArtist extends Omit<IArtistModule, 'id'> {}
