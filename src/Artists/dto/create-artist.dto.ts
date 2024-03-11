import { IsNotEmpty, IsString, IsUUID, IsBoolean } from 'class-validator';

export class CreateArtistDto {
  @IsUUID('4', { message: 'id must be of type UUID' })
  id: string; // uuid v4

  @IsString({ message: 'name must be of type string' })
  name: string;

  @IsBoolean({ message: 'grammy must be of type boolean' })
  grammy: boolean;
}
