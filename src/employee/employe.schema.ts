import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type EmployeeDocument = Employee & Document
@Schema({ timestamps: true })
export class Employee {
    @Prop({ required: true })
    name: string
    @Prop({ required: true })
    age: number
    @Prop()
    city?: string
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee) 