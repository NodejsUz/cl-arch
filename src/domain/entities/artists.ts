import { randomUUID } from 'crypto';
import { IArtistModule } from '../models/artist.model';

export class ArtistsEntity implements IArtistModule {
  id: string;
  name: string;
  grammy: boolean;

  constructor(name: string, grammy: boolean) {
    this.id = randomUUID();
    this.name = name;
    this.grammy = grammy;
  }
}
