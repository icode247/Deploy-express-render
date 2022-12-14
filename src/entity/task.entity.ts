import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    completed: boolean;
}
