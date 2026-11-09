import { Module } from '@nestjs/common';
import { KayesService } from './kayes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Kstudent } from './Schemas/kstudents.schema';
import { KstudentSchema } from './Schemas/kstudents.schema';

@Module({
  imports: [MongooseModule.forFeature([{
    name: Kstudent.name,
    schema: KstudentSchema
  }], "connection1")],
  /* referencing imports 

  MongooseModule.forFeatureAsync([
    {
      name: Kstudent.name,
      schema: KstudentSchema,
      connectionName: 'connection1'
    },
    {
      name: Address.name,
      schema: AddressSchema,
      connectionName: 'connection2' 
    }
  ])
  */
  providers: [KayesService]
})
export class KayesModule { }
