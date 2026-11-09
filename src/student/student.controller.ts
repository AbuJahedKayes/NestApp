/*import { Body, Controller, Delete, Get, Param, Post, Put, Patch } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
    constructor(private readonly StudentService: StudentService) { }
    @Get()
    getAllStudents() {
        return this.StudentService.findAllStudent()
    }

    @Get(':id')
    getStudentById(@Param('id') id: string) {
        return this.StudentService.findStudentById(Number(id));
    }
    @Post()
    addNewStudent(@Body() body: { name: string, age: number, city: string }) {
        return this.StudentService.createNewStudent(body);
    }
    @Put(':id')
    UpdateStudent(@Param('id') id: string, @Body() body: { name: string, age: number, city: string }) {
        return this.StudentService.updateStudent(Number(id), body)

    }
    @Patch(':id')
    PatchStudent(@Param('id') id: string, @Body() body: { name: string, age: number, city: string }) {
        return this.StudentService.patchStudent(Number(id), body)
    }
    @Delete(':id')
    DeleteStudent(@Param('id') id: string) {
        return this.StudentService.deleteStudent(Number(id))
    }
}*/

import { Body, Controller, Delete, Get, Param, Post, Put, Patch, UsePipes, UseGuards } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create.student.dto';
import { UppercasePipe } from '../common/pipes/uppercase/uppercase.pipe';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { RolesGuard } from 'src/guards/roles/roles.guard';
import { Roles } from 'src/guards/roles/roles.decorator';
import { RoleType } from 'src/guards/roles/roles.enum';

@Controller('student')
//@UseGuards(AuthGuard)
export class StudentController {
    constructor(private readonly StudentService: StudentService) { }

    @Get()
    @UseGuards(AuthGuard)
    getAllStudents() {
        return this.StudentService.findAllStudent()
    }

    @Get(':id')
    getStudentById(@Param('id') id: string) {
        return this.StudentService.findStudentById(Number(id));
    }

    @Post()
    @UseGuards(RolesGuard)
    @Roles(RoleType.Admin)
    @UsePipes(new UppercasePipe())
    addNewStudent(@Body() body: CreateStudentDto) {
        return this.StudentService.createNewStudent(body);
    }

    @Put(':id')
    UpdateStudent(@Param('id') id: string, @Body() body: CreateStudentDto) {
        return this.StudentService.updateStudent(Number(id), body)
    }

    @Patch(':id')
    PatchStudent(@Param('id') id: string, @Body() body: Partial<CreateStudentDto>) {
        return this.StudentService.patchStudent(Number(id), body)
    }

    @Delete(':id')
    DeleteStudent(@Param('id') id: string) {
        return this.StudentService.deleteStudent(Number(id))
    }
}
