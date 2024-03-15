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
    addCity: this.trpc.procedure.input(z.string()).query(async ({input}) => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${process.env.OWM_API_KEY}&units=metric`);
      const weatherData = await response.json();

      // The searched city is not found
      if (weatherData.message?.includes("not found")) {
        throw new Error("La ville n'existe pas.");
      }

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
        if (error.code === 11000) {
          // Mongoose "Duplicate Key" error code
          throw new Error("La ville existe déjà.");
        }

        throw new Error("Unknown error");
      }
    }),
    removeCity: this.trpc.procedure.input(z.string()).query(async ({input}) => {
      return await this.citiesService.remove(input);
    })
  });
}
