import { Module } from '@nestjs/common';
import { ArtistsController } from './artists.controller';
import { ArtistsService } from './artists.service';
import { DbModule } from 'src/db/db.module';

@Module({
  controllers: [ArtistsController],
  providers: [ArtistsService],
  imports: [DbModule],
})
export class ArtistsModule {}
