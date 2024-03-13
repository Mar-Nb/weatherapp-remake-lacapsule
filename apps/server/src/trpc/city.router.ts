import { TrpcService } from '@server/trpc/trpc.service';
import { Injectable } from '@nestjs/common';
import { CitiesService } from '@server/cities/cities.service';
import { z } from 'zod';
import { City } from '@server/cities/city.schema';

@Injectable()
export class CityRouter {
  constructor(
    private readonly trpc: TrpcService,
    private citiesService: CitiesService,
  ) {}

  router = this.trpc.router({
    getAllCities: this.trpc.procedure.query(async () => {
      return await this.citiesService.findAll();
    }),
    addCity: this.trpc.procedure.input(z.string()).query(async({input}) => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${process.env.OWM_API_KEY}&units=metric`);
      const weatherData = await response.json();
      const newCity = new City(
        input,
        weatherData.weather[0].main,
        weatherData.weather[0].description,
        weatherData.main.temp_min,
        weatherData.main.temp_max,
      );

      try {
        const city = await this.citiesService.create(newCity);
        return city;
      } catch (error) {
        console.error(error);
        throw new Error("Duplicate city");
      }
    })
  });
}
