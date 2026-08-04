import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pannes } from './pannes.entity';

@Injectable()
export class PannesService {
  constructor(
    @InjectRepository(Pannes)
    private readonly panneRepository: Repository<Pannes>,
  ) {}

  // GET ALL
  async getAll() {
    return this.panneRepository.find();
  }

  // GET ONE
  async getOne(id: number) {
    const panne = await this.panneRepository.findOneBy({ id });

    if (!panne) {
      throw new NotFoundException('Panne not found');
    }

    return panne;
  }

  // CREATE
  async create(data: any) {
    return this.panneRepository.save(data);
  }

  // UPDATE
  async update(id: number, data: any) {
    const panne = await this.panneRepository.findOneBy({ id });

    if (!panne) {
      throw new NotFoundException('Panne not found');
    }

    await this.panneRepository.update(id, data);

    return this.panneRepository.findOneBy({ id });
  }

  // DELETE
  async delete(id: number) {
    const result = await this.panneRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException('Panne not found');
    }

    return { message: 'Panne deleted successfully' };
  }
}
