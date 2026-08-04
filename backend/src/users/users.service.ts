import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
constructor(
@InjectRepository(Users)
private readonly userRepository: Repository<Users>,
) {}
  async getAll() {
    return this.userRepository.find();
  }

  // GET ONE
  async getOne(id: number) {
    const panne = await this.userRepository.findOneBy({ id });

    if (!panne) {
      throw new NotFoundException('Panne not found');
    }

    return panne;
  }

  // CREATE
  async create(data: any) {
    return this.userRepository.save(data);
  }

  // UPDATE
  async update(id: number, data: any) {
    const user = await this.userRepository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException('Panne not found');
    }

    await this.userRepository.update(id, data);

    return this.userRepository.findOneBy({ id });
  }

  // DELETE
  async delete(id: number) {
    const result = await this.userRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException('user not found');
    }

    return { message: 'Panne deleted successfully' };
  }
}