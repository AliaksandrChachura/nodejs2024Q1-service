import { Module } from '@nestjs/common';
import { UsersController } from './Users/users.controller';
import { UsersService } from './Users/users.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { TracksService } from './tracks/tracks.service';
import { TracksController } from './tracks/tracks.controller';
import { TracksModule } from './tracks/tracks.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    UsersModule,
    TracksModule,
  ],
  controllers: [UsersController, TracksController],
  providers: [UsersService, TracksService],
})
export class AppModule {}
