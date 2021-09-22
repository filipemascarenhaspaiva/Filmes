import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FilmeDocument = Filme & Document;

@Schema()
export class Filme {
  @Prop()
  nome: string;

  @Prop()
  sinopse: string;

  @Prop()
  duracao: string;
}

export const FilmeSchema = SchemaFactory.createForClass(Filme);
