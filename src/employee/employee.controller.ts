import { Controller, Delete, Get, Param, Post, Put, Body } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from './employe.schema';

@Controller('employee')
export class EmployeeController {
    constructor(
        private readonly employeeService: EmployeeService) { }

    @Post()
    createEmployee(@Body() data: Partial<Employee>) {
        return this.employeeService.createEmployee(data)
    }

    @Get()
    getAllData() {
        return this.employeeService.getAllData();
    }
    @Get(':id')
    getEmployeeById(@Param('id') id: string) {
        return this.employeeService.getEmployeeById(id);
    }
    @Delete(':id')
    deleteEmployeeById(@Param('id') id: string) {
        return this.employeeService.deleteEmployeeById(id);
    }
    @Put(':id')
    updateEmployeeById(@Param('id') id: string, @Body() data: Partial<Employee>) {
        return this.employeeService.updateEmployeeById(id, data);
    }

}
