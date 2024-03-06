import { Module } from '@nestjs/common';
import { TrpcService } from '@server/trpc/trpc.service';
import { TrpcRouter } from './trpc.router';
import { CityRouter } from './city.router';
import { CitiesModule } from '@server/cities/cities.module';
import { UsersModule } from '@server/users/users.module';
import { UserRouter } from './user.router';

@Module({
  imports: [CitiesModule, UsersModule],
  controllers: [],
  providers: [TrpcService, TrpcRouter, CityRouter, UserRouter],
})
export class TrpcModule {}
