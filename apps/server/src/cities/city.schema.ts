import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class City {
  @Prop()
  name: string;

  @Prop()
  main: string;

  @Prop()
  description: string;

  @Prop()
  tempMin: number;

  @Prop()
  tempMax: number;
}

export const CitySchema = SchemaFactory.createForClass(City);
