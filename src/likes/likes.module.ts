import { Module } from '@nestjs/common';
import { LikesController } from './likes.controller';
import { LikesService } from './likes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Likes } from './entities/likes.entity';
import { JwtService } from '@nestjs/jwt';
import { JwtStrategy } from 'src/user/strategies/jwt.strategy';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Likes]), UserModule],
  controllers: [LikesController],
  providers: [LikesService, JwtService, JwtStrategy],
  exports: [LikesService],
})
export class LikesModule {}