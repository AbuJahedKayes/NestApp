import { Controller, Post, Get, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { NishadService } from './nishad.service';
import { Nishad } from './nishad.entity';
import { SupabaseAuthGuard } from 'src/guards/auth/supabase-auth/supabase-auth.guard';

@Controller('nishad')
export class NishadController {
    constructor(private readonly nishadService: NishadService) { }

    @Post()
    create(@Body() data: { name: string; age: number; city: string }): Promise<Nishad> {
        return this.nishadService.create(data);
    }
    @UseGuards(SupabaseAuthGuard)
    @Get()
    findAll(): Promise<Nishad[]> {
        return this.nishadService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Nishad | null> {
        return this.nishadService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() data: Partial<Nishad>): Promise<Nishad | null> {
        return this.nishadService.update(+id, data);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.nishadService.remove(+id);
    }
}
