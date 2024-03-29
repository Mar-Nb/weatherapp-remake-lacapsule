import { Module } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { MongooseModule } from '@nestjs/mongoose';
import { City, CitySchema } from './city.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: City.name, schema: CitySchema }]),
  ],
  providers: [CitiesService],
  exports: [CitiesService],
})
export class CitiesModule {}
