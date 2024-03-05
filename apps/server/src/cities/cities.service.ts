import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { City } from './city.schema';
import { Model } from 'mongoose';

@Injectable()
export class CitiesService {
  constructor(
    @InjectModel(City.name) private readonly cityModel: Model<City>,
  ) {}

  async create(city: City): Promise<City> {
    const newCity = new this.cityModel(city);
    return await newCity.save();
  }

  async findAll(): Promise<City[]> {
    return await this.cityModel.find();
  }

  async findOne(id: string): Promise<City | null> {
    return await this.cityModel.findById(id);
  }

  async update(id: string, city: City): Promise<City | null> {
    return await this.cityModel.findByIdAndUpdate(id, city, { new: true });
  }

  async remove(id: string): Promise<City | null> {
    return await this.cityModel.findByIdAndDelete(id);
  }
}
