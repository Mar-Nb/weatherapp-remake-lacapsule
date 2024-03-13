import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class City {
  @Prop({ unique: true })
  name: string;

  @Prop()
  main: string;

  @Prop()
  description: string;

  @Prop()
  tempMin: number;

  @Prop()
  tempMax: number;

  _id: string;

  constructor(name: string, main: string, description: string, tempMin: number, tempMax: number) {
    this.name = name;
    this.main = main;
    this.description = description;
    this.tempMin = tempMin;
    this.tempMax = tempMax;
  }
}

export const CitySchema = SchemaFactory.createForClass(City);
