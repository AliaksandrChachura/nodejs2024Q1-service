// import { Album } from 'src/album/interface/album.interface';
// import { Artist } from 'src/artist/interface/artist.interface';
import { Track } from '../../Tracks/interface/track.interface';
import { UserEntity } from '../../Users/entity/user.entity';

export const enum DbEntities {
  USERS = 'users',
  // TRACKS = 'tracks',
  // ARTISTS = 'artists',
  // ALBUMS = 'albums',
}

export type Entities = UserEntity[];
