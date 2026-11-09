import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Kstudent } from './Schemas/kstudents.schema';
import { Model } from 'mongoose';

@Injectable()
export class KayesService {
    constructor(@InjectModel(Kstudent.name, "connection1") private readonly KstudentModel: Model<Kstudent>) { }
    //referencing 
    //constructor (@InjectModel(Kstudent.name) private readonly KstudentModel: Model<Kstudent>, 
    //@InjectModel(Address.name) private readonly AddressModel: Model<Address>)

    async createKayes(data: Partial<Kstudent>): Promise<Kstudent> {
        const newKayes = new this.KstudentModel(data);
        return newKayes.save();
    }
}
