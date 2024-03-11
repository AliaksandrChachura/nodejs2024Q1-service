import {
  IsNotEmpty,
  IsString,
  IsUUID,
  ValidateIf,
  IsInt,
} from 'class-validator';
import { CreateTrackDto } from './create-track.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateTrackDto extends PartialType(CreateTrackDto) {
  @IsString({ message: 'Field "name" must be a string' })
  @IsNotEmpty({ message: 'Field "name" cannot be empty' })
  name: string;

  @ValidateIf((o) => o.artistId !== null)
  @IsString({ message: 'artistId must be a string or null' })
  @IsUUID('4', { message: 'artistId must be in format UUID' })
  artistId: string | null;

  @ValidateIf((o) => o.albumId !== null)
  @IsString({ message: 'albumId must be a string or null' })
  @IsUUID('4', { message: 'albumId must be in format UUID' })
  albumId: string | null;

  @IsInt({ message: 'duration must be a number' })
  duration: number;
}
