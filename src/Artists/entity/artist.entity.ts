import { Artist } from '../interface/artist.interface';
import { v4 as uuid4 } from 'uuid';

export class ArtistEntity implements Artist {
  id: string; // uuid v4

  name: string;

  grammy: boolean;

  constructor({ name, grammy }: Partial<ArtistEntity>) {
    this.id = uuid4();
    this.id = name;
    this.grammy = grammy;
  }
}
