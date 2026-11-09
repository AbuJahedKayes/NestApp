import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
//import {Document,Schema as mongooseSchema} from "mongoose"
import { Document } from "mongoose"
import { Address } from "./address.schema"

export type KstudentDocument = Kstudent & Document
@Schema()
export class Kstudent {
    @Prop({ required: true })
    name: string
    @Prop({ required: true })
    age: number
    //referencing 
    //@Prop({type: mongooseSchema.Types.ObjectId, ref: 'Kayes', required: true })
    @Prop({ type: Address, required: true })
    address: Address
}

export const KstudentSchema = SchemaFactory.createForClass(Kstudent) 