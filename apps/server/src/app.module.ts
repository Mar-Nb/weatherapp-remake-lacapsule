import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TrpcModule } from '@server/trpc/trpc.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CitiesModule } from './cities/cities.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ConfigModule.forRoot(), TrpcModule, MongooseModule.forRoot(process.env.DATABASE_URL || ''), CitiesModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
