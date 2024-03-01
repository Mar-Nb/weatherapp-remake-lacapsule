import { Injectable } from '@nestjs/common';
import { User } from './user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}

  async create(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    return await newUser.save();
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find();
  }

  async findOne(id: string): Promise<User | null> {
    return await this.userModel.findById(id);
  }

  async update(id: string, user: User): Promise<User | null> {
    return await this.userModel.findByIdAndUpdate(id, user, { new: true });
  }

  async remove(id: string): Promise<User | null> {
    return await this.userModel.findByIdAndDelete(id);
  }
}
