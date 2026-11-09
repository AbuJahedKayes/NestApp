/*import { Injectable } from '@nestjs/common';
import { Student } from './interfaces/student.interface';

@Injectable()
export class StudentService {
    private student: Student[] = [
        {
            id: 1,
            name: "John",
            age: 20,
            city: "New York"
        },
        {
            id: 2,
            name: "Jane",
            age: 21,
            city: "Los Angeles"
        },
        {
            id: 3,
            name: "Bob",
            age: 22,
            city: "Chicago"
        }
    ]

    findAllStudent() {
        return this.student;
    }

    findStudentById(id: number) {
        const learner = this.student.find(students => students.id === id)
        if (!learner) { throw new Error("Student not found") }
        return learner;
    }

    createNewStudent(data: { name: string; age: number; city: string }) {
        const newStudentId = this.student.length > 0 ? this.student[this.student.length - 1].id + 1 : 1;
        const newStudent = { id: newStudentId, ...data }
        this.student.push(newStudent);
        return "New Student added ..."
    }
    updateStudent(id: number, data: { name: string; age: number; city: string }) {
        const index = this.student.findIndex(students => students.id === id)
        if (index === -1) {
            throw new Error("Student not found")
        }
        this.student[index] = { id, ...data }
        return "Student updated ..."
    }
    patchStudent(id: number, data: { name: string, age: number, city: string }) {
        const index = this.student.findIndex(students => students.id === id)
        if (index === -1) {
            throw new Error("Student not found")
        }
        this.student[index] = { ...this.student[index], ...data };
        return `Student with id ${id} updated successfully`;

    }
    deleteStudent(id: number) {
        const index = this.student.findIndex(students => students.id === id)
        if (index === -1) {
            throw new Error("Student not found")
        }
        this.student.splice(index, 1)
        return "Student deleted ..."
    }

}*/
import { Injectable } from '@nestjs/common';
import { Student } from './interfaces/student.interface';
import { CreateStudentDto } from './dto/create.student.dto';

@Injectable()
export class StudentService {
    private student: Student[] = [
        {
            id: 1,
            name: "John",
            age: 20,
            city: "New York"
        },
        {
            id: 2,
            name: "Jane",
            age: 21,
            city: "Los Angeles"
        },
        {
            id: 3,
            name: "Bob",
            age: 22,
            city: "Chicago"
        }
    ]

    findAllStudent() {
        return this.student;
    }

    findStudentById(id: number) {
        const learner = this.student.find(students => students.id === id)
        if (!learner) { throw new Error("Student not found") }
        return learner;
    }

    createNewStudent(data: CreateStudentDto) {
        const newStudentId = this.student.length > 0 ? this.student[this.student.length - 1].id + 1 : 1;
        const newStudent = { id: newStudentId, ...data }
        this.student.push(newStudent);
        return "New Student added ..."
    }

    updateStudent(id: number, data: CreateStudentDto) {
        const index = this.student.findIndex(students => students.id === id)
        if (index === -1) {
            throw new Error("Student not found")
        }
        this.student[index] = { id, ...data }
        return "Student updated ..."
    }

    patchStudent(id: number, data: Partial<CreateStudentDto>) {
        const index = this.student.findIndex(students => students.id === id)
        if (index === -1) {
            throw new Error("Student not found")
        }
        this.student[index] = { ...this.student[index], ...data };
        return `Student with id ${id} updated successfully`;
    }

    deleteStudent(id: number) {
        const index = this.student.findIndex(students => students.id === id)
        if (index === -1) {
            throw new Error("Student not found")
        }
        this.student.splice(index, 1)
        return "Student deleted ..."
    }
}
