import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserController } from './users/users.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { EmployeeModule } from './employee/employee.module';
import { StudentModule } from './student/student.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { KayesModule } from './Kayes/kayes.module';
import { KayesController } from './Kayes/kayes.controller';
import { NishadModule } from './nishad/nishad.module';

@Module({
  imports: [
    EmployeeModule,
    StudentModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      connectionName: 'connection1',
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forRootAsync({
      connectionName: 'connection2',
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI2'),
      }),
      inject: [ConfigService],
    }),
    KayesModule,
    NishadModule,
  ],
  controllers: [AppController, UserController, ProductController, KayesController],
  providers: [ProductService],
})
export class AppModule { }