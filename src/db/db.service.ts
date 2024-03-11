import { Injectable } from '@nestjs/common';
// import { Favorites } from 'src/favorite/interface/favorites.interface';
import { UserEntity } from '../Users/entity/user.entity';
import { DbEntities, Entities } from './types/db.interface';
// import { Album } from 'src/album/interface/album.interface';
import { Artist } from '../Artists/interface/artist.interface';
// import { Track } from '../Tracks/interface/track.interface';

@Injectable()
export class DbService {
  users: UserEntity[] = [];
  // albums: Album[] = [];
  artists: Artist[] = [];
  // tracks: Track[] = [];

  // favorites: Favorites = {
  //   artists: [],
  //   albums: [],
  //   tracks: [],
  // };

  verifyEntityPresence(entityId: string, entityType: DbEntities): boolean {
    const entities: Entities = this[entityType];
    const matchingEntity = entities.find((entity) => entity.id === entityId);
    return matchingEntity ? true : false;
  }
}
