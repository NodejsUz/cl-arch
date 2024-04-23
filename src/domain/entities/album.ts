import { randomUUID } from "crypto";
import { IAlbumModule } from "../models/album.model";

export class CreateAlbumEntity implements IAlbumModule {
  id: string;
  name: string;
  year: number;
  artistId: string | null;

  constructor(name: string, year: number, artistId?: string) {
    this.id = randomUUID();
    this.name = name;
    this.year = year;
    this.artistId = artistId || null;
  }
}
