import { TrpcService } from '@server/trpc/trpc.service';
import { Injectable } from '@nestjs/common';
import { CitiesService } from '@server/cities/cities.service';

@Injectable()
export class CityRouter {
  constructor(private readonly trpc: TrpcService, private citiesService: CitiesService) {}

  router = this.trpc.router({
    getAllCities: this.trpc.procedure.query(async () => {
      return await this.citiesService.findAll();
    }),
  });
}

