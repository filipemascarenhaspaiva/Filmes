import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
import { Filme, FilmeDocument } from './entities/filme.entity';

@Injectable()
export class FilmesService {
  filmeModel: any;
  constructor(
    @InjectModel(Filme.name) private catModel: Model<FilmeDocument>,
  ) {}

  create(createFilmeDto: CreateFilmeDto) {
    const filme = new this.filmeModel(createFilmeDto);
    return filme.save();
  }

  findAll() {
    return this.filmeModel.find();
  }

  findOne(id: string) {
    return this.filmeModel.findById(id);
  }

  update(id: string, updateFilmeDto: UpdateFilmeDto) {
    return this.filmeModel.findByIdAndupdate(
      {
        _id: id,
      },
      {
        updateFilmeDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.filmeModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
}
