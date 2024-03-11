import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { TrackEntity } from './entity/track.entity';
import { DbService } from 'src/db/db.service';
// import { CreateTrackDto } from './dto/create-track.dto';
// import { UpdateTrackDto } from './dto/update-track.dto';

@Injectable()
export class TracksService {
  // constructor(private db: DbService) {}
  // async getAllTracks() {
  //   return this.db.tracks;
  // }
  // async findById(id: string) {
  //   const track = this.db.tracks.find((track) => track.id === id);
  //   if (!track) {
  //     throw new NotFoundException(`Track with ID "${id}" not found`);
  //   }
  //   return track;
  // }
  // async create(createTrackDto: CreateTrackDto) {
  //   const newTrack = new TrackEntity(createTrackDto);
  //   const existingTrack = this.db.tracks.find(
  //     (track) => track.id === newTrack.id,
  //   );
  //   if (existingTrack) {
  //     throw new HttpException(
  //       'Track with the same name already exists',
  //       HttpStatus.CONFLICT,
  //     );
  //   }
  //   this.db.tracks.push(newTrack);
  //   return newTrack;
  // }
  // // async update(id: string, updateUserDto: UpdateTrackDto) {
  // //   const currentUser = await this.findById(id);
  // //   if (currentUser.password !== updateUserDto.oldPassword) {
  // //     throw new HttpException('Old password does not match', 403);
  // //   }
  // //   currentUser.password = updateUserDto.newPassword;
  // //   currentUser.version = currentUser.version + 1;
  // //   currentUser.updatedAt = Date.now();
  // //   return currentUser;
  // // }
  // async delete(id: string) {
  //   const currentUser = await this.findById(id);
  //   const index = this.db.users.findIndex((u) => u.id === currentUser.id);
  //   if (index !== -1) {
  //     this.db.users.splice(index, 1);
  //   }
  // }
}
