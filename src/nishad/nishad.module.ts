import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Nishad } from './nishad.entity';
import { NishadService } from './nishad.service';
import { NishadController } from './nishad.controller';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                url: configService.get<string>('postgre_sql'),
                autoLoadEntities: true,
                synchronize: true,
                ssl: { rejectUnauthorized: false },
            }),
            inject: [ConfigService],
        }),
        TypeOrmModule.forFeature([Nishad]),
    ],
    providers: [NishadService],
    controllers: [NishadController],
})
export class NishadModule { }
