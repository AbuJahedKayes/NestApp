import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Nishad } from './nishad.entity';

@Injectable()
export class NishadService {
    constructor(
        @InjectRepository(Nishad)
        private readonly nishadRepo: Repository<Nishad>,
    ) { }

    async create(data: { name: string; age: number; city: string }): Promise<Nishad> {
        const nishad = this.nishadRepo.create(data);
        return this.nishadRepo.save(nishad);
    }

    async findAll(): Promise<Nishad[]> {
        return this.nishadRepo.find();
    }

    async findOne(id: number): Promise<Nishad | null> {
        return this.nishadRepo.findOne({ where: { id } });
    }

    async update(id: number, data: Partial<Nishad>): Promise<Nishad | null> {
        await this.nishadRepo.update(id, data);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.nishadRepo.delete(id);
    }
}
