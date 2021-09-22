import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FilmesModule } from './filmes/filmes.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:yhd3vg4OXiUXEo2v@cluster0.m5hwq.mongodb.net/test',
    ),
    FilmesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
