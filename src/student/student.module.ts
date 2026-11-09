import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Student, StudentSchema } from './student.schema';

@Module({
    imports: [
        MongooseModule.forFeature(
            [{ name: Student.name, schema: StudentSchema }],
            'connection1', // ← কোন connection ব্যবহার করবে, সেটা এখানে বলতে হবে
        ),
    ],
})
export class StudentModule { }