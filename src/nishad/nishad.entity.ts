import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Nishad {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    name: string
    @Column()
    age: number
    @Column()
    city: string
}
