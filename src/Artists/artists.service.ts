import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ArtistEntity } from './entity/artist.entity';
import { DbService } from 'src/db/db.service';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';

@Injectable()
export class ArtistsService {
  constructor(private db: DbService) {}

  async getAllArtists() {
    return this.db.artists;
  }

  async findById(id: string) {
    const artist = this.db.artists.find((artist) => artist.id === id);
    if (!artist) {
      throw new NotFoundException(`Artist with ID "${id}" not found`);
    }
    return artist;
  }

  async create(createArtistDto: CreateArtistDto) {
    const newArtist = new ArtistEntity(createArtistDto);
    this.db.artists.push(newArtist);
    return newArtist;
  }

  async update(id: string, updateArtistDto: UpdateArtistDto) {
    const currentArtist = await this.findById(id);

    currentArtist.name = updateArtistDto.name;
    currentArtist.grammy = updateArtistDto.grammy;
    return currentArtist;
  }

  async delete(id: string) {
    const currentArtist = await this.findById(id);
    const index = this.db.artists.findIndex((u) => u.id === currentArtist.id);
    if (index !== -1) {
      this.db.artists.splice(index, 1);
    }
  }
}
