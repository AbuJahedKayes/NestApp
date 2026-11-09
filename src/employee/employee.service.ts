import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Employee, EmployeeDocument } from './employe.schema';
import { Model } from 'mongoose';

@Injectable()
export class EmployeeService {
    constructor(
        @InjectModel(Employee.name, 'connection2')
        private employeeModel: Model<EmployeeDocument>,
    ) { }

    async createEmployee(data: Partial<Employee>): Promise<Employee> {
        const newEmployee = new this.employeeModel(data);
        return newEmployee.save();
    }

    async getAllData(): Promise<Employee[]> {
        return this.employeeModel.find().exec();
    }

    async getEmployeeById(id: string): Promise<Employee | null> {
        return this.employeeModel.findById(id).exec();
    }

    async deleteEmployeeById(id: string): Promise<Employee | null> {
        return this.employeeModel.findByIdAndDelete(id).exec();
    }

    async updateEmployeeById(
        id: string,
        data: Partial<Employee>,
    ): Promise<Employee | null> {
        return this.employeeModel
            .findByIdAndUpdate(id, data, { new: true })
            .exec();
    }
}
