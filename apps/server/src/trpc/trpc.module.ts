import { Module } from '@nestjs/common';
import { TrpcService } from '@server/trpc/trpc.service';
import { TrpcRouter } from './trpc.router';
import { CityRouter } from './city.router';
import { CitiesModule } from '@server/cities/cities.module';

@Module({
  imports: [CitiesModule],
  controllers: [],
  providers: [TrpcService, TrpcRouter, CityRouter],
})
export class TrpcModule {}
